'use client'

import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import Hr from './Hr'

gsap.registerPlugin(ScrollTrigger)

export default function SecondSection() {
  const container = useRef(null)
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((context: any) => {
      const toReveal = context.selector('.reveal')
      toReveal.forEach((reveal: any) => {
        gsap.from(reveal, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: 'Power3.out',
          scrollTrigger: {
            trigger: reveal
          }
        })
      })
    }, container.current)
    return () => ctx.revert()
  }, [])
  return (
    <section
      className='min-h-screen flex flex-col justify-center items-center w-full'
      id='about'
    >
      <div ref={container} className='pt-8 pb-[100px]'>
        <div className='reveal text-[24px] italic font-semibold mb-[48px]'>
          <h2>
            I craft websites with attention to detail and user experience.
          </h2>
        </div>
        <div className='reveal text-[14px] mb-[36px]'>
          <h2>
            Technologies i commonly use: React, React Native, NextJS,
            TailwindCSS, NodeJS, Javascript, Typescript, Express, GSAP, AWS,
            EC2, Route53, Docker, Mongoose
          </h2>
        </div>
        <div className='reveal font-semibold mb-[24px]'>
          <h2>Experience: </h2>
        </div>
        <div className='reveal font-semibold mb-[72px]'>
          <div className='flex justify-between'>
            <a href='https://mercdev.com/' target='_blank' rel='noreferrer'>
              <h2>Mercury Development</h2>
            </a>
            <h2>Frontend Intern</h2> <h2>Nov 2022-Feb 2023</h2>
          </div>
          <Hr />
        </div>
        <div className='reveal font-semibold mb-[24px]'>
          <h2>Education: </h2>
        </div>
        <div className='reveal font-semibold'>
          <div className='flex justify-between'>
            <a target='_blank' rel='noreferrer'>
              <h2>Universidad de Buenos Aires</h2>
            </a>
            <h2>Computer Science</h2> <h2>Fifth Semester</h2>
          </div>
          <Hr />
        </div>
      </div>
    </section>
  )
}
