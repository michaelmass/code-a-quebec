import Image from 'next/image'
import LogoSvg from '@/images/logos/logo.png'
import { cn } from '@/util'

export function Logo(props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  return <Image {...props} alt="Logo" src={LogoSvg.src} className={cn('bg-blue-700 rounded-full shadow-xl', props.className)} />
}
