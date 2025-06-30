'use client'

import Link from 'next/link'
import { ButtonOutline } from '@/components/ButtonOutline'
import { Container } from '@/components/Container'
import { attendeesTotal, botpressGoogleMapsLink, presentationTotal } from '@/const'
import { formatCodeAQuebecLink, getLastThursdayOfMonth } from '@/util'

export function Hero() {
  const nextLastThursday = getLastThursdayOfMonth()
  const eventLink = formatCodeAQuebecLink(nextLastThursday)

  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">C@Q - </span>Code @ Québec
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Le <b>Code @ Québec</b> est un meetup pour découvrir des technologies et rencontrer d&apos;autres devs. Chaque événement comprend <b>deux talks</b>, et les présentations sont techniques{' '}
              <span className="font-comic">(Pas de talks sur la culture d&apos;entreprise au C@Q)</span>. L&apos;événement est ouvert à tous les devs de Québec. Vous pouvez trouver l&apos;événement
              sur la plateforme Eventbrite.
            </p>
            <ButtonOutline href={eventLink} className="w-full gap-2" target="_blank">
              <span>Inscris-toi au prochain meetup</span>
              <span className="text-sm text-blue-500">(Ça coûte rien!)</span>
            </ButtonOutline>
            <p>
              Les meetups commencent à <b>18h</b> et se terminent aux alentours de <b>21h</b>. Les talks durent <b>20-40 minutes</b> chacun, suivis d&apos;une période de questions. C&apos;est
              l&apos;occasion parfaite pour échanger avec d&apos;autres devs et discuter des sujets qui vous intéressent.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            <div>
              <dt className="font-mono text-sm text-blue-600">Présentations</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">{presentationTotal}</dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-blue-600">Participants</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">{attendeesTotal}</dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-blue-600">Emplacement</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                <Link className="underline hover:underline-offset-2" href={botpressGoogleMapsLink}>
                  Bureau de Botpress
                </Link>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-blue-600">Lieu</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">Québec, QC</dd>
            </div>
          </dl>
        </div>
      </Container>
    </div>
  )
}
