'use client'

import Image from 'next/image'
import { useWindowSize } from 'react-use'
import { Container } from '@/components/Container'
import QrImage from '@/images/qr.png'

export const Qr = () => {
  const { width, height } = useWindowSize()

  return (
    <Container className="relative h-screen w-screen flex items-center justify-center m-0 p-0 max-w-screen">
      <Image src={QrImage} alt="QR Code" width={width / 2} height={height / 2} />
    </Container>
  )
}
