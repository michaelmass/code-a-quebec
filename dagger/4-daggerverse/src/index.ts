import { dag, Container, object, func } from "@dagger.io/dagger"

@object()
export class Daggerverse {
  @func()
  echo(stringArg: string): Container {
    return dag
      .container()
      .from("alpine:latest")
      .withExec(["echo", stringArg])
  }

  @func()
  nodeversion(): Container {
    return dag
      .node()
      .withVersion({ version: "20" })
      .container()
      .withExec(["node", "--version"])
  }
}
