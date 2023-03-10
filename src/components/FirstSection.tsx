import Card from './Card'
import Hr from './Hr'
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function FirstSection() {
  const container = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((context: any) => {
      const tl = gsap.timeline()
      const hrs = context.selector('hr')
      console.log(hrs)
      tl.from('.reveal', {
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'Power4.out'
      })
      tl.from('hr', {
        duration: 1,
        opacity: 0,
        xPercent: -100,
        ease: 'Power4.out',
        stagger: {
          amount: 0.3
        }
      })
      tl.from('.text', {
        duration: 0.4,
        opacity: 0,
        y: 30,
        ease: 'Power4.out',
        stagger: {
          amount: 0.3
        }
      })
      tl.from(
        '.Card',
        {
          opacity: 0,
          y: 30,
          ease: 'Power4.out',
          stagger: {
            amount: 0.5
          }
        },
        '<'
      )
    }, container.current)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={container}
      className='min-h-screen w-full flex justify-start items-center flex-col pb-[100px]'
    >
      <div className='mb-[calc(14vh+10px)] w-full reveal'>
        <header className='flex justify-between w-full'>
          <h2 className='font-light text-[32px]'>Federico</h2>
          <h2 className='font-light text-[32px]'>Achaval</h2>
        </header>
        <Hr />
      </div>
      <h2 className='text-[38px] font-semibold w-full text-center text'>
        Argentine
      </h2>
      <Hr />
      <div className='smd:flex block w-full overflow-y-hidden'>
        <h2 className='text-[38px] font-semibold min-w-full text-left text smd:inline-block smd:min-w-fit'>
          Frontend
        </h2>
        <Hr className='smd:hidden' />
        <h2 className='text-[38px] font-semibold w-full text-right text smd:inline'>
          Developer
        </h2>
      </div>
      <Hr />
      <div className='smd:flex block w-full overflow-y-hidden'>
        <h2 className='text-[38px] font-semibold w-full text-left text smd:w-fit'>
          Based
        </h2>
        <Hr className='smd:hidden' />
        <h2 className='text-[38px] font-semibold text smd:w-full text-right'>
          In Buenos Aires
        </h2>
      </div>
      <Hr />
      <Card
        className='bg-[#FFF] text-[#3f3b38] mt-[30px]'
        text='About'
        number='01'
      />
      <Card className='bg-[#db4c45] text-white' text='Projects' number='02' />
      <Card
        className='bg-[#e7aa2d] text-[#3f3b38]'
        text='Contact'
        number='03'
      />
    </section>
  )
}
