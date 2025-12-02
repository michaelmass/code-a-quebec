import { FAQ } from '@/components/FAQ'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Speakers } from '@/components/Speakers'
import { Talks } from '@/components/Talks'
import { Suspense } from 'react'

export default function () {
  return (
    <>
      <Hero />
      {/* TODO?: <Talks /> */}
      <Suspense fallback={null}>
        <Speakers />
      </Suspense>
      <Newsletter />
      {/* TODO?: <FAQ /> */}
    </>
  )
}
