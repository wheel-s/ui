import React from 'react'
import Image from 'next/image'
import p1 from '../../public/images/ht.webp'
import jv from  '../../public/images/hpp.png'
import mv from '../../public/images/akatsuki.jpg'
const page = () => {
  return (
    <div className='grid justify-center'>
      <section className='mt-10'>
         
        <p>Go back in time...</p>
      </section>
      <section className='mt-10 grid gap-4 tilt'>
        <Image src={p1} alt='img' width={300} className='img1'/>
        <Image src={mv} alt='img' width={300} className='img2'/>
        <Image src={jv} alt='img' width={300} className='img3'/>
      </section>
    </div>
  )
}

export default page
