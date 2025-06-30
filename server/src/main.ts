import { z } from './mod.ts'

const bodySchema = z.object({
  date: z.string().datetime(), // Date in ISO format
  time: z.number(), // Time in seconds
})

export const main = async (req: Request): Promise<{ body?: Record<string, unknown>; status?: number } | undefined> => {
  const kv = await Deno.openKv()

  if (req.method === 'POST') {
    const body = await req.json()

    const value = bodySchema.parse(body)

    await kv.set(['timer'], value)

    return
  }

  if (req.method === 'GET') {
    const value = await kv.get(['timer'])

    if (!value.value) {
      return {
        status: 404,
        body: {
          error: 'Timer not found',
        },
      }
    }

    return {
      body: {
        ...value.value,
      },
      status: 200,
    }
  }

  return {
    status: 405,
    body: {
      error: 'Method not allowed',
    },
  }
}
