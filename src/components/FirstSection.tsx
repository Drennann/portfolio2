import Card from './Card'
import Hr from './Hr'

export default function FirstSection() {
  return (
    <section className='min-h-full w-screen flex justify-start items-center flex-col'>
      <div className='mb-[calc(16vh+10px)] w-full'>
        <header className='flex justify-between w-full'>
          <h2 className='font-light text-[32px]'>Constance</h2>
          <h2 className='font-light text-[32px]'>Achaval</h2>
        </header>
        <Hr />
      </div>
      <h2>Argentine</h2>
      <Hr />
      <h2>Frontend</h2>
      <Hr />
      <h2>Developer</h2>
      <Hr />
      <h2>Based</h2>
      <Hr />
      <h2>In Buenos Aires</h2>
      <Hr />
      <Card />
      <Card />
      <Card />
    </section>
  )
}
