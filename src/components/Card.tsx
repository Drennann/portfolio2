import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLElement> {
  text?: string
  number?: string
}

export default function Card({
  className,
  text = 'text',
  number = '01'
}: CardProps) {
  return (
    <div>
      <p>{text}</p>
      <p>{number}</p>
    </div>
  )
}
