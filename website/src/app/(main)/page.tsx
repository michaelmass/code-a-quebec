import { FAQ } from '@/components/FAQ'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Speakers } from '@/components/Speakers'
import { Talks } from '@/components/Talks'

export default function () {
  return (
    <>
      <Hero />
      {/* TODO?: <Talks /> */}
      <Speakers />
      <Newsletter />
      {/* TODO?: <FAQ /> */}
    </>
  )
}
