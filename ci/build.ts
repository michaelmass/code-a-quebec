import { connect } from 'https://raw.githubusercontent.com/michaelmass/pipelines/master/dagger/dagger.ts'
import { build, getDirectory } from './util.ts'

await connect(async client => {
  const directory = getDirectory(client)
  await build({ client, directory }).sync()
})
