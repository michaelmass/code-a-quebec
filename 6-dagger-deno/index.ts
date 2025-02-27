import { connect } from "https://esm.sh/@dagger.io/dagger@0.9.6";

await connect(async (client) => {
	const source = client
		.host()
		.directory("./app", { exclude: ["node_modules/"] });

	const bunFile = client
		.container()
		.from("oven/bun")
		.withDirectory("/src", source)
		.withWorkdir("/src")
		.withExec(["bun", "install"])
		.withExec(["bun", "run", "build:bun"])
		.directory("dist/")
		.file("index.js");

	console.log(await bunFile.sync());
});
