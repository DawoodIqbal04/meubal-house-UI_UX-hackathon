import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' w-full h-[calc(100vh-100px)] flex items-center justify-between pr-20 pl-24 font-medium bg-[#FBEBB5]'>
        <div className=' flex flex-col gap-10'>
            <p className=' text-6xl'>Rocket Single <br />Seater</p>
            <button type='button'  className='text-2xl w-[121px] h-[50px] border-black border-b-2'>Shop Now</button>
        </div>
        <div>
            <Image src={"/heroimage.png"} height={0} width={510} alt='Rocket Single Seater'></Image>
        </div>
    </div>
  )
}

export default Hero