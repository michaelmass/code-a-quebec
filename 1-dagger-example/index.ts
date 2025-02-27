import { connection, dag } from "@dagger.io/dagger";

await connection(async () => {
	const source = dag
		.host()
		.directory("./app", { exclude: ["node_modules/"] });

	const bunFile = dag
		.container()
		.from("oven/bun")
		.withDirectory("/src", source)
		.withWorkdir("/src")
		.withExec(["bun", "install"])
		.withExec(["bun", "run", "build:bun"])
		.directory("dist/")
		.file("index.js");

	const nodeFile = dag
		.container()
		.from(`node:20-bullseye`)
		.withDirectory("/src", source)
		.withWorkdir("/src")
		.withMountedCache("/root/.npm", dag.cacheVolume("npm-cache"))
		.withExec(["npm", "install"])
		.withExec(["npm", "run", "build:node"])
		.directory("dist/")
		.file("index.js");

	await dag
		.directory()
		.withFile("bun-index.js", bunFile)
		.withFile("node-index.js", nodeFile)
		.export("./app/dagger-build");
},
{ LogOutput: process.stdout });

// const [bunFileAwaited, nodeFileAwaited] = await Promise.all([
//   nodeFile.sync(),
//   bunFile.sync(),
// ])
