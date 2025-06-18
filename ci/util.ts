import type {
	Client,
	Directory,
} from "https://raw.githubusercontent.com/michaelmass/pipelines/master/dagger/dagger.ts";

export const getDirectory = (client: Client) =>
	client
		.host()
		.directory(".", { exclude: [".git", ".github", "node_modules", "ci"] });

export const setupWebsite = ({
	client,
	directory,
}: { client: Client; directory: Directory }) => {
	return client
		.container()
		.from("node:22-slim")
		.withEnvVariable("PNPM_HOME", "/pnpm")
		.withExec(["corepack", "enable"])
		.withWorkdir("/app")
		.withDirectory(".", directory)
		.withExec(["pnpm", "install"]);
};
