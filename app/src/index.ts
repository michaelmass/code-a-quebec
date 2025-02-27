import { Hono,  } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default {
  port: 3000,
  fetch: app.fetch,
  hostname: '0.0.0.0',
}
