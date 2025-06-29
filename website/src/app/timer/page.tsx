import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Timer } from '@/components/Timer'

export default function () {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute w-full flex items-center justify-center">
        <Link className="cursor-pointer z-50 mt-20" href="/">
          <Logo width={132} height={200} />
        </Link>
      </div>
      <Timer />
    </div>
  )
}
