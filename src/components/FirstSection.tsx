import Card from './Card'
import Hr from './Hr'
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function FirstSection() {
  const container = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((context: any) => {
      const tl = gsap.timeline()
      tl.from('.current', {
        autoAlpha: 0,
        ease: 'linear'
      })
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
      className='min-h-screen w-full flex justify-start items-center flex-col pb-[100px] invisible current'
    >
      <div className='mb-[calc(14vh+10px)] w-full reveal'>
        <header className='flex justify-between w-full md:justify-center italic'>
          <h2 className='font-light text-[32px] md:text-[64px] px-[20px] md:mr-[20px]'>
            Federico
          </h2>
          <h2 className='font-light text-[32px] md:text-[64px] px-[20px]'>
            Achaval
          </h2>
        </header>
        <Hr />
      </div>
      <div className='w-full overflow-y-hidden flex justify-between items-center'>
        <h2 className='text-[38px] font-semibold w-full text-center text md:text-[64px] ld:text-[56px]'>
          Argentine
        </h2>
      </div>
      <Hr />
      <div className='smd:flex block w-full overflow-y-hidden smd:justify-between'>
        <h2 className='text-[38px] font-semibold smd:w-fit text-left text md:text-[64px] ld:text-[56px]'>
          Frontend
        </h2>
        <Hr className='smd:hidden' />
        <h2 className='text-[38px] font-semibold w-full text-right text smd:w-fit md:text-[56px] ld:text-[56px]'>
          Developer
        </h2>
      </div>
      <Hr />
      <div className='smd:flex block w-full overflow-y-hidden smd:justify-between'>
        <h2 className='text-[36px] font-semibold w-full text-left text smd:w-fit md:text-[64px] ld:text-[56px]'>
          Based
        </h2>
        <Hr className='smd:hidden' />
        <h2 className='text-[36px] font-semibold text text-right smd:w-fit md:text-[64px] ld:text-[56px]'>
          In Buenos Aires
        </h2>
      </div>
      <Hr />
      <Link href='#about' className='w-full overflow-y-hidden' scroll={false}>
        <Card
          className='bg-[#FFF] text-[#3f3b38] mt-[30px]'
          text='About'
          number='01'
        />
      </Link>
      <Link
        href='#projects'
        className='w-full overflow-y-hidden'
        scroll={false}
      >
        <Card className='bg-[#db4c45] text-white' text='Projects' number='02' />
      </Link>
      <Link href='#contact' className='w-full overflow-y-hidden' scroll={false}>
        <Card
          className='bg-[#e7aa2d] text-[#3f3b38]'
          text='Contact'
          number='03'
        />
      </Link>
    </section>
  )
}
