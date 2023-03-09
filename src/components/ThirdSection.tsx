import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import Card from './Card'
import Hr from './Hr'

gsap.registerPlugin(ScrollTrigger)

export default function ThirdSection() {
  const container = useRef(null)
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((context: any) => {
      const toReveal = context.selector('.reveal')
      const toHr = context.selector('hr')
      const Cards = context.selector('.Card')
      toReveal.forEach((reveal) => {
        gsap.from(reveal, {
          opacity: 0,
          y: 48,
          duration: 1,
          ease: 'Power3.out',
          scrollTrigger: {
            trigger: reveal
          }
        })
      })
      Cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 48,
          duration: 1,
          ease: 'Power3.out',
          scrollTrigger: {
            trigger: card
          }
        })
      })
    }, container.current)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={container} className='w-full pb-[72px]'>
      <div className='reveal flex justify-start text-[40px] font-semibold'>
        <h2>Some</h2>
      </div>
      <Hr />
      <div className='reveal flex justify-end text-[40px] font-semibold'>
        <h2>Projects</h2>
      </div>
      <Hr className='mb-[36px]' />
      <Card className='Card bg-[#FBEFDE]' text='MELI Clone' number='01' />
      <Card
        className='Card bg-[#db4c45] text-white'
        text='MerchApp'
        number='02'
      />
      <Card className='Card bg-[#e7aa2d]' text='BarberApp' number='03' />
      <Card className='Card bg-[#45bddb]' text='ChatApp' number='04' />
    </section>
  )
}
