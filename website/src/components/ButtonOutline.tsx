import clsx from 'clsx'
import Link from 'next/link'

type ButtonOutlineProps = React.ComponentPropsWithoutRef<typeof Link> | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })

export function ButtonOutline({ className, ...props }: ButtonOutlineProps) {
  className = clsx(
    'inline-flex justify-center rounded-2xl outline-2 outline-offset-2 outline-blue-500 bg-blue-200 text-blue-600 p-2 px-4 text-base font-semibold hover:bg-blue-300 focus-visible:outline-blue-700 active:text-blue-600/70',
    className,
  )

  return typeof props.href === 'undefined' ? <button className={className} {...props} /> : <Link className={className} {...props} />
}
