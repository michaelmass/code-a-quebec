import { upload } from 'https://raw.githubusercontent.com/michaelmass/pipelines/master/dagger/cloudflare.ts'
import { connect } from 'https://raw.githubusercontent.com/michaelmass/pipelines/master/dagger/dagger.ts'
import { getInfinsical } from 'https://raw.githubusercontent.com/michaelmass/pipelines/master/dagger/infisical.ts'
import { context } from 'npm:@actions/github'
import { build, getDirectory } from './util.ts'

await connect(async client => {
  const directory = getDirectory(client)
  const distDirectory = build({ client, directory })

  const infisical = getInfinsical({ 
    client, 
    token: Deno.env.get('INFISICAL_ACCESS_TOKEN'), 
    workspaceId: Deno.env.get('INFISICAL_PROJECT_ID') 
  })

  const cloudflareAccountIdSecret = await infisical.get({
    name: 'ACCOUNT_ID',
    secretPath: 'accounts/cloudflare',
    secretName: 'cloudflareAccountId',
  })

  const cloudflareApiTokenSecret = await infisical.get({
    name: 'API_TOKEN',
    secretPath: 'accounts/cloudflare',
    secretName: 'cloudflareApiToken',
  })

  await upload({
    client,
    dir: distDirectory,
    accountId: cloudflareAccountIdSecret,
    cloudflareToken: cloudflareApiTokenSecret,
    project: 'code-a-quebec-website',
    branch: context.ref?.split('/').pop(),
    commitHash: context?.sha,
    commitMessage: context?.payload?.head_commit?.message,
  })
})
