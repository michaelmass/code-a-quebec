'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { ButtonOutline } from '@/components/ButtonOutline'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { type Profile, profiles } from '@/talks'
import { formatCodeAQuebecLink, formatRelativeDate, getNextEventDate } from '@/util'

type UpcomingTalk = {
  profile: Profile
  title: string
  description?: string
}

const nextEventDate = getNextEventDate()

const upcomingTalks: UpcomingTalk[] = [
  {
    profile: profiles.jeanGabrielGillCouture,
    title: "Pour l'amour des compilateurs : Shift left ou crève",
  },
  {
    profile: profiles.redaTarzalt,
    title: "Design d'un interpreter québécois",
  },
]

function TalkCard({ talk, index }: { talk: UpcomingTalk; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      card.style.setProperty('--spot-x', `${x}%`)
      card.style.setProperty('--spot-y', `${y}%`)
    }

    card.addEventListener('mousemove', onMouseMove)
    return () => card.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div ref={cardRef} className="talk-card relative overflow-hidden rounded-2xl border border-blue-100 bg-white/60 p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-200/50">
      <div className="talk-card-glow pointer-events-none absolute inset-0" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <DiamondIcon className="h-1.5 w-1.5 fill-blue-600 stroke-blue-600" />
          <span className="font-mono text-sm text-blue-600">Talk {index + 1}</span>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Image src={talk.profile.profile} alt={talk.profile.name} className="h-12 w-12 rounded-full object-cover" width={48} height={48} />
          <div>
            <h3 className="font-display text-xl font-medium tracking-tight text-blue-900">{talk.title}</h3>
            <p className="text-base font-semibold text-slate-600">
              {talk.profile.name}
              {talk.profile.company ? <span className="font-normal text-slate-400"> @ {talk.profile.company}</span> : null}
            </p>
          </div>
        </div>
        <p className="mt-3 text-base tracking-tight text-gray-600">{talk.description}</p>
      </div>
    </div>
  )
}

export function NextEvent() {
  const eventLink = formatCodeAQuebecLink(nextEventDate)
  const formattedDate = nextEventDate.toLocaleDateString('fr-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <section aria-labelledby="next-event-title" className="py-4 sm:py-10">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="next-event-title" className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Prochain événement
          </h2>
          <p className="font-display mt-4 text-lg tracking-tight text-blue-900 sm:text-2xl">
            {formatRelativeDate(nextEventDate)} &mdash; <time dateTime={nextEventDate.toISOString().split('T')[0]}>{formattedDate}</time>
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {upcomingTalks.map((talk, index) => (
            <TalkCard key={index} talk={talk} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonOutline href={eventLink} className="w-full max-w-md flex-wrap gap-x-2" target="_blank">
            <span>Inscris-toi</span>
            <span className="text-sm text-blue-500">(C&apos;est gratuit!)</span>
          </ButtonOutline>
        </div>
      </Container>
    </section>
  )
}
