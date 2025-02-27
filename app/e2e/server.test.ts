import { describe, expect, it } from 'vitest'

const serverUrl = process.env.SERVER_URL || 'http://localhost:3000'

console.log(serverUrl)

describe('server', () => {
  it('should return 200 for /', async () => {
    const res = await fetch(serverUrl)
    expect(res.status).toBe(200)
  })
})
