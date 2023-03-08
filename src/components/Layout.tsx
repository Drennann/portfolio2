import { Inter } from 'next/font/google'
import { HTMLAttributes } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps extends HTMLAttributes<HTMLElement> {}

export default function Layout({ ...props }: LayoutProps) {
  return (
    <main
      className={`${inter.className} ${props.className} bg-[#b2b2a9] min-h-screen w-screen flex justify-center items-start p-8`}
      {...props}
    />
  )
}
