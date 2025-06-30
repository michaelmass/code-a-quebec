import { getConfig } from './config.ts'
import { main } from './main.ts'

const { apiKey, port } = getConfig()

Deno.serve({ port }, async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } })
  }

  const authorization = req.headers.get('authorization')

  if (apiKey && req.method === 'POST' && apiKey !== authorization) {
    return new Response('Unauthorized', { status: 401 })
  }

  const res = await main(req)

  return new Response(JSON.stringify(res?.body), {
    status: res?.status ?? 200,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
})
