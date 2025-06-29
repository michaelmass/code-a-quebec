'use client'

import { useWindowSize } from 'react-use'
import { Container } from '@/components/Container'

export const Timer = () => {
  const { width } = useWindowSize()

  if (!Number.isFinite(width)) return null

  return (
    <Container className="relative h-screen w-screen flex items-center justify-center m-0 p-0 max-w-screen">
      <h1 className="text-center font-comic text-blue-600" style={{ fontSize: width / 6 }}>
        40m 00s
      </h1>
    </Container>
  )
}
