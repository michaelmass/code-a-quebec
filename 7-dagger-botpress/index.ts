import {
	type Container,
	type File,
	connect,
} from "https://esm.sh/@dagger.io/dagger@0.9.6";
import { openai } from 'npm:@ai-sdk/openai'
import { generateText } from 'npm:ai';

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

	const globContainer = client
		.container()
		.from("node:18-bullseye")
		.withExec(["npm", "install", "-g", "glob"], { skipEntrypoint: true })

	const integrationPromises: Promise<Container>[] = [];

	const tsFiles: string[] = []

	for (const integration of integrations) {
		const integrationContainer = container.withWorkdir(`/src/integrations/${integration}`)
		const integrationDirectory = integrationContainer.directory(`/src/integrations/${integration}`)

		const globOutput = await globContainer
			.withDirectory("/src", integrationDirectory)
			.withExec(["glob", "-i=node_modules/**", "**/*.ts"], { skipEntrypoint: true, redirectStdout: '/glob.txt' })
			.file('/glob.txt')
			.contents()

		const files = globOutput
			.split('\n')
			.filter(Boolean)
			.filter(line => !line.includes('node_modules'))
			.filter(line => !line.includes('.botpress'))
			.filter(line => !line.includes('bp_modules'))
			.filter(line => !line.includes('/gen/'))
			.map(line => `/integrations/${integration}/${line.substring(5)}`)

		tsFiles.push(...files)

		const checkIntegrationPromises = checkIntegration(container.withWorkdir(`/src/integrations/${integration}`))
		integrationPromises.push(checkIntegrationPromises)
	}

	await Promise.all(integrationPromises);

	const tsFilesPromises: Promise<'GOOD' | 'BAD' | 'UNKNOWN'>[]  = []

	for (const tsFile of tsFiles) {
		const file = repository.file(tsFile)
		const checkCodePromises = checkCode(file)
		tsFilesPromises.push(checkCodePromises)
	}

	const analysis = await Promise.all(tsFilesPromises);

	const results = analysis.reduce((acc, result) => {
		if (result === 'GOOD') {
			acc.good++
		} else if (result === 'BAD') {
			acc.bad++
		} else {
			acc.unknown++
		}

		return acc
	}, { good: 0, bad: 0, unknown: 0 })

	console.log(`GOOD CODE: ${Math.round(results.good / (results.good + results.bad) * 100)}%`)
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


async function checkCode(file: File): Promise<'GOOD' | 'BAD' | 'UNKNOWN'> {
	const { text } = await generateText({
		model: openai('gpt-4-turbo'),
		prompt: 'Tell me if the following code is good code or bad code. Only answer with a boolean TRUE or FALSE. Do not answer with anything else. Do not explain. Only answer with TRUE or FALSE. \n```\n' + await file.contents() + '\n```',
	});

	if (text === 'TRUE') {
		return 'GOOD'
	}

	if (text === 'FALSE') {
		return 'BAD'
	}

	return 'UNKNOWN'
}
