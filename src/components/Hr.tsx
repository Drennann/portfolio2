import { HTMLAttributes } from 'react'

interface HrProps extends HTMLAttributes<HTMLElement> {}

export default function Hr({ className }: HrProps) {
  return (
    <hr
      className={`min-w-[100%] border-[#121212] self-start ${className} w-[100%]`}
    />
  )
}
