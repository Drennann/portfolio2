import Head from 'next/head'
import Layout from '@/components/Layout'
import FirstSection from '@/components/FirstSection'
import SecondSection from '@/components/SecondSection'
import ThirdSection from '@/components/ThirdSection'
import { Alegreya } from 'next/font/google'

const alegreya = Alegreya({
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout className={`${alegreya.className} max-w-[768px] m-auto p-[24px]`}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </Layout>
    </>
  )
}
