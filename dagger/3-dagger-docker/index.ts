import { dag, connection } from "@dagger.io/dagger";

await connection(async () => {
  const source = dag
    .host()
    .directory("./app", { exclude: ["node_modules/"] })

  await dag.container()
    .build(source)
    .sync()
}, { LogOutput: process.stdout })

// .withRegistryAuth("docker.io", "michaelmass", dag.setSecret("docker-hub-token", "my-secret-token"))
// .publish("my-app")
