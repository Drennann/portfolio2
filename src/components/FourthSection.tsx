import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

export default function FourthSection() {
  return (
    <section className='bg-[#3f3b34] w-full text-white p-[24px] rounded-t-[12px]'>
      <div className='flex w-full justify-evenly items-center'>
        <AiFillLinkedin className='h-12 w-12 fill-white hover:fill-[#b2b2a6] transition-colors duration-300 cursor-pointer' />
        <AiFillMail className='h-12 w-12 fill-white hover:fill-[#b2b2a6] transition-colors duration-300 cursor-pointer' />
        <AiFillGithub className='h-12 w-12 fill-white hover:fill-[#b2b2a6] transition-colors duration-300 cursor-pointer' />
      </div>
    </section>
  )
}
