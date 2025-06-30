if not os.path.exists('extension_tiltfile'):
  local('curl https://raw.githubusercontent.com/michaelmass/tiltfile-extensions/master/Tiltfile > extension_tiltfile', quiet=True)

load(
  './extension_tiltfile',
  'bool_to_string',
  'default_resources',
  'default_settings',
  'define_config',
  'dict_merge',
  'dict_omit',
  'docker_compose_resources',
  'docker_resource',
  'dotenv_watch',
  'open',
  'postgres_uri',
  'redis_uri',
  'resource',
  'set_mode',
  'string_to_bool',
  'write_file',
)

dotenv_watch()
default_settings()

local('deno run -A jsr:@michaelmass/ghf/cli type -o=.ghf.type.ts', quiet=True)
local('deno run -A jsr:@michaelmass/ghf/cli apply', quiet=True)
local('lefthook install', quiet=True)

resource(
  name='install',
  dir='website',
  cmd='pnpm install'
)

resource(
  name='website',
  dir='website',
  serve_cmd='pnpm run dev',
  resource_deps=['install']
)

resource(
  name='timer',
  dir='timer',
  serve_cmd='deno run --watch --unstable-kv -A src/index.ts'
)
