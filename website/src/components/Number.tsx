type NumberTitleProps = {
  number: string
}

export const NumberTitle = ({ number }: NumberTitleProps) => {
  return (
    <span className="inline-block">
      <div className="font-mono rounded-4xl px-3 py-2 flex items-center justify-center text-base bg-blue-700 text-white">{number}</div>
    </span>
  )
}
