import { connect } from "https://raw.githubusercontent.com/michaelmass/pipelines/master/dagger/dagger.ts";
import { getDirectory, setupWebsite } from "./util.ts";

await connect(async (client) => {
	const directory = getDirectory(client);
	await setupWebsite({ client, directory })
		.withWorkdir("/website")
		.withExec(["pnpm", "build"])
		.directory("./dist")
		.sync();
});
