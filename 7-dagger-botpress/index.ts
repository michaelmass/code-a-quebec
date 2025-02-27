import {
	type Container,
	connect,
} from "https://esm.sh/@dagger.io/dagger@0.9.6";

await connect(async (client) => {
	const repository = client
		.container()
		.from("alpine")
		.withExec(["apk", "add", "git"], { skipEntrypoint: true })
		.withExec(["git", "clone", "https://github.com/botpress/botpress"], {
			skipEntrypoint: true,
		})
		.directory("botpress");

	const integrationsDirectory = repository.directory("integrations");
	const integrations = await integrationsDirectory.entries();

	const container = await client
		.container()
		.from("node:18-bullseye")
		.withExec(["npm", "install", "-g", "pnpm@8"], { skipEntrypoint: true })
		.withDirectory("/src", repository)
		.withWorkdir("/src")
		.withExec(["pnpm", "install"], { skipEntrypoint: true })
		.withExec(["pnpm", "build"], { skipEntrypoint: true })
		.sync();

	const promises: Promise<Container>[] = [];

	for (const integration of integrations) {
		promises.push(checkIntegration(container.withWorkdir(`/src/integrations/${integration}`)))
	}

	await Promise.all(promises);
});


async function checkIntegration(container: Container) {
	const packageJsonContent = await container
		.file("package.json")
		.contents();

	const packageJson = JSON.parse(packageJsonContent);

	const baseContainer = container
		.withExec(["pnpm", "check:type"], { skipEntrypoint: true })

	if (!packageJson['scripts']['check:bplint']) {
		return baseContainer.sync()
	}

	return baseContainer.withExec(["pnpm", "check:bplint"], { skipEntrypoint: true }).sync()
}
