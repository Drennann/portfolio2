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
    <div
      className={`Card h-[88px] w-full flex justify-between items-end ${className} rounded-br-[24px] relative hover:bg-[#3f3b37] hover:text-[#fbefdf] ease-out transition-colors duration-300 cursor-pointer`}
    >
      <div className='flex justify-between w-full p-[12px] text-inherit'>
        <p className='text-inherit font-normal z-20'>{text}</p>
        <p className='text-inherit font-normal z-20'>{number}</p>
      </div>
    </div>
  )
}
