'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ButtonOutline } from '@/components/ButtonOutline'
import { Container } from '@/components/Container'
import { HeroShader } from '@/components/HeroShader'
import { attendeesTotal, botpressGoogleMapsLink, presentationTotal } from '@/const'
import { formatCodeAQuebecLink, getNextEventDate } from '@/util'

export function Hero() {
  const nextLastThursday = getNextEventDate()
  const eventLink = formatCodeAQuebecLink(nextLastThursday)

  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const rotateY = useTransform(springX, [0, 1], [8, -8])
  const rotateX = useTransform(springY, [0, 1], [-6, 6])
  const skewX = useTransform(springX, [0, 1], [2, -2])
  const scale = useTransform(springY, [0, 0.5, 1], [1.01, 1.03, 1.01])

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <>
      {/* Shader hero — title only, shader visible through text */}
      {/* Outer darken blend: white areas let the page background through, darker shader colors stay */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-default"
        style={{ mixBlendMode: 'darken', perspective: '800px' }}
      >
        <div className="relative overflow-hidden" style={{ isolation: 'isolate' }}>
          <HeroShader />
          {/* White overlay — screen blend makes black text reveal the shader, white stays white */}
          <motion.div
            className="relative z-10 flex flex-col items-center bg-white pt-4"
            style={{ mixBlendMode: 'screen', rotateX, rotateY, skewX, scale, transformOrigin: '50% 50%', boxShadow: '0 0 0 100vmax white' }}
          >
            <h1 className="px-4 text-center text-4xl leading-none font-black tracking-tight text-black uppercase sm:text-6xl lg:text-8xl">
              <span className="sr-only">C@Q - </span>Code @ Québec
            </h1>
            <p className="mt-2 text-base font-medium text-neutral-800 sm:text-lg">Le meetup tech des devs de Québec</p>
          </motion.div>
        </div>
      </div>

      {/* Content section below */}
      <div className="relative py-10 sm:py-12">
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <div className="font-display space-y-6 text-justify text-lg tracking-tight text-blue-900 sm:text-2xl">
              <p>
                Le <b>Code @ Québec</b> est un meetup pour découvrir des technologies et rencontrer d&apos;autres devs. Chaque événement comprend <b>deux talks</b>, et les présentations sont
                techniques <span className="font-comic">(Pas de talks sur la culture d&apos;entreprise au C@Q)</span>. L&apos;événement est ouvert à tous les devs de Québec. Vous pouvez trouver
                l&apos;événement sur la plateforme Eventbrite.
              </p>
              <ButtonOutline href={eventLink} className="w-full flex-wrap gap-x-2" target="_blank">
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
    </>
  )
}
