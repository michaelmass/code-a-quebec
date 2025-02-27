import { connect } from "https://esm.sh/@dagger.io/dagger@0.9.6";

await connect(async (client) => {
	const source = client
		.host()
		.directory("./app", { exclude: ["node_modules/"] });
});
