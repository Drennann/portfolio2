import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

export default function FourthSection() {
  return (
    <section
      className='bg-[#3f3b34] w-full text-white p-[24px] rounded-t-[12px]'
      id='contact'
    >
      <div className='flex w-full justify-evenly items-center max-w-[1024px] m-auto'>
        <a
          href='https://www.linkedin.com/in/federicoachaval/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillLinkedin className='h-12 w-12 fill-white hover:fill-[#b2b2a6] transition-colors duration-300 cursor-pointer' />
        </a>
        <a
          href='mailto: federico.achavaldev@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillMail className='h-12 w-12 fill-white hover:fill-[#b2b2a6] transition-colors duration-300 cursor-pointer' />
        </a>
        <a href='https://github.com/Drennann' target='_blank' rel='noreferrer'>
          <AiFillGithub className='h-12 w-12 fill-white hover:fill-[#b2b2a6] transition-colors duration-300 cursor-pointer' />
        </a>
      </div>
    </section>
  )
}
