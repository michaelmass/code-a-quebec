import { dag, connection } from "@dagger.io/dagger";

await connection(async () => {
  const source = dag
    .host()
    .directory("./app", { exclude: ["node_modules/"] })

  const containerWithDependencies = dag
    .container()
    .from(`oven/bun`)
    .withDirectory("/src", source)
    .withWorkdir("/src")
    .withExec(["bun", "install"])

  const buildDir = containerWithDependencies
    .withExec(["bun", "run", "build:bun"])
    .directory("dist/")
    .withFile("package.json", source.file("package.json"))
    .withFile("bun.lock", source.file("bun.lock"))

  const service = containerWithDependencies
    .withDirectory("/src/dist", buildDir)
    .withExposedPort(3000)
    .asService({ args: ["bun", "run", "dist/index.js"] })

  await dag.container()
    .from(`node:20-bullseye`)
    .withDirectory("/src", containerWithDependencies.directory("/src"))
    .withWorkdir("/src")
    .withServiceBinding("server", service)
    .withEnvVariable("SERVER_URL", "http://server:3000")
    .withExec(["npm", "run", "test"])
    .sync()
}, { LogOutput: process.stdout })
