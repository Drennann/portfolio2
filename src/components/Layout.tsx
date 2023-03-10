import { HTMLAttributes } from 'react'
import FourthSection from './FourthSection'

interface LayoutProps extends HTMLAttributes<HTMLElement> {}

export default function Layout({ ...props }: LayoutProps) {
  return (
    <>
      <main
        className={`${props.className} bg-[#b2b2a6] min-h-screen w-full flex justify-start items-center p-8 flex-col max-w-[768px] m-auto`}
        {...props}
      />
      <FourthSection />
    </>
  )
}
