'use client'

import { useState } from 'react'
import { useAsync, useInterval, useWindowSize } from 'react-use'
import { z } from 'zod/v4'
import { Container } from '@/components/Container'
import { timerUrl } from '@/const'
import { cn, formatDurationRelative } from '@/util'

const timerSchema = z.object({
  date: z.iso.datetime(),
  time: z.number(),
})

export const Timer = () => {
  const { width } = useWindowSize()
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [totalTime, setTotalTime] = useState<number | undefined>(undefined)
  const [time, setTime] = useState(0)
  const [state, setState] = useState<'init' | 'waiting' | 'running' | 'finished'>('init')

  useInterval(() => {
      if (totalTime === undefined) return
      if (!startDate) return

      const diff = (new Date().getTime() - startDate.getTime()) / 1000

      if (diff < 0) {
        setState('waiting')
        setTime(Math.abs(diff))
      } else {
        const elapsed = totalTime - diff

        if (elapsed < 0) {
          setState('finished')
          setTime(Math.abs(elapsed))
        } else {
          setState('running')
          setTime(elapsed)
        }
      }
  }, 500)

  useInterval(() => {
    const update = async () => {
      const response = await fetch(timerUrl)
      const data = await response.json()
      const value = timerSchema.safeParse(data)

      if (value.success) {
        setStartDate(new Date(value.data.date))
        setTotalTime(value.data.time)
      }
    }

    void update().catch(console.error)
  }, 60000)

  useAsync(async () => {
    const response = await fetch(timerUrl)
    const data = await response.json()
    const value = timerSchema.safeParse(data)

    if (value.success) {
      setStartDate(new Date(value.data.date))
      setTotalTime(value.data.time)
    }
  }, [])

  if (!Number.isFinite(width)) return null

  if (state === 'init') return null

  return (
    <Container className="relative flex-col h-screen w-screen flex items-center justify-center m-0 p-0 max-w-screen">
      {state === 'waiting' ? <h2 className='text-center font-comic text-blue-600' style={{ fontSize: width / 24 }}>Débute dans </h2> : null}
      {state === 'finished' ? <h2 className='text-center font-comic text-red-600' style={{ fontSize: width / 24 }}>Finis depuis </h2> : null}
      <h1 className={cn("text-center font-comic", state === 'finished' ? 'text-red-600' : 'text-blue-600')} style={{ fontSize: width / 6 }}>
        {formatDurationRelative(Math.max(0, time))}
      </h1>
    </Container>
  )
}
