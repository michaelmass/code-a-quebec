import clsx from 'clsx'
import type { Metadata } from 'next'
import { DM_Sans, Inter, Shantell_Sans } from 'next/font/google'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const shantellSans = Shantell_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-shantell-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Code @ Québec',
    default: 'Code @ Québec - Un meetup de tech à Québec',
  },
  description: 'Le Code @ Québec est un meetup pour découvrir des technologies et rencontrer d&apos;autres devs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx('h-full bg-white antialiased', inter.variable, dmSans.variable, shantellSans.variable)}>
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
