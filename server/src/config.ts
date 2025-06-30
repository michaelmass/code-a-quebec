import { z } from './mod.ts'

const configSchema = z.object({
  apiKey: z.string().optional(),
  port: z
    .string()
    .optional()
    .default('8080')
    .transform(value => Number.parseInt(value, 10)),
})

export const getConfig = () =>
  configSchema.parse({
    apiKey: Deno.env.get('APIKEY'),
    port: Deno.env.get('PORT'),
  })
