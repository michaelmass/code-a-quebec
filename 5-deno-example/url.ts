import { Hono } from "jsr:@hono/hono";
import { z } from "https://esm.sh/zod@3.24.2";
import { zValidator } from "https://esm.sh/@hono/zod-validator@0.4.3"

const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

const validator = zValidator('query', z.object({ name: z.string() }))

app.get('/query', validator, (c) => {
  const { name } = c.req.valid('query')

  return c.text(`Hello ${c.name}!`)
})

Deno.serve(app.fetch)
