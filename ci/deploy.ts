import { upload } from 'https://raw.githubusercontent.com/michaelmass/pipelines/master/dagger/cloudflare.ts'
import { connect } from 'https://raw.githubusercontent.com/michaelmass/pipelines/master/dagger/dagger.ts'
import { context } from 'npm:@actions/github'
import { build, getDirectory } from './util.ts'

await connect(async client => {
  const directory = getDirectory(client)
  const distDirectory = build({ client, directory })

  // TODO!
  const cloudflareAccountId = client.setSecret('cloudflareAccountId', '')
  const cloudflareToken = client.setSecret('cloudflareToken', '')

  await upload({
    client,
    dir: distDirectory,
    accountId: cloudflareAccountId,
    cloudflareToken: cloudflareToken,
    project: 'code-a-quebec-website',
    branch: context.ref?.split('/').pop(),
    commitHash: context?.sha,
    commitMessage: context?.payload?.head_commit?.message,
  })
})
