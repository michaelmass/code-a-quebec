import { Hono } from 'jsr:@hono/hono'
import { z } from 'https://esm.sh/zod@3.24.2'

const app = new Hono()

app.get('/', c => c.text('Hono!'))

const schema = z.object({
  name: z.string().optional(),
})

app.post('/query', c => {
  const body = c.req.parseBody()

  const { name } = schema.parse(body)

  return c.text(`Hello ${name}!`)
})

Deno.serve(app.fetch)
