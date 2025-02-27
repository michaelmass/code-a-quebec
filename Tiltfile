local_resource(
  name="app",
  serve_cmd="npm run dev",
  serve_dir="app"
)

local_resource(
  name="1-dagger-example",
  cmd="bin/dagger run bun 1-dagger-example/index.ts",
  auto_init=False,
)

local_resource(
  name="2-dagger-service",
  cmd="bin/dagger run bun 2-dagger-service/index.ts",
  auto_init=False,
)

local_resource(
  name="3-dagger-docker",
  cmd="bin/dagger run bun 3-dagger-docker/index.ts",
  auto_init=False,
)

local_resource(
  name="4-daggerverse",
  cmd="../bin/dagger call nodeversion",
  dir="4-daggerverse",
  auto_init=False,
)

local_resource(
  name="5-demo-example",
  cmd="sh bash.sh",
  dir="5-deno-example",
  auto_init=False,
)

local_resource(
  name="6-dagger-deno",
  cmd="dagger run deno -A --no-lock 6-dagger-deno/index.ts && echo \"GITHUB ACTION\"",
  auto_init=False,
)

local_resource(
  name="7-dagger-botpress",
  cmd="dagger run deno -A --no-lock 7-dagger-botpress/index.ts",
  auto_init=False,
)
