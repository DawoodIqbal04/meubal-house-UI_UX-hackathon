import React from 'react'
import Image from 'next/image'
import Hero from './hero'
import ProductCard from './productCard'
import BlogCard from './blogCard'
import Header from "./header";

const HomePage = () => {
  return (
  <div>
    <Header bgcolor={"#FBEBB5"}/>
    <Hero />

    <div className=' w-full h-[600px] flex items-center justify-around bg-[#FAF4F4]'>
    
      <div className='flex flex-col w-[550px] h-[550px] items-center justify-start'>
        <div>
          <Image src={"/table.png"} alt='table' height={400} width={400}></Image>
        </div>
        <div className='font-medium flex flex-col gap-6'>
          <p className='text-4xl'>Side Table</p>
          <button className='w-[125px] h-[49px] text-2xl border-black border-b-2'>View More</button>
        </div>
      </div>

      <div className='flex flex-col items-center  w-[550px] h-[550px] '>
        <div>
          <Image src={"/sofa.png"} alt='table' height={400} width={400}></Image>
        </div>
        <div className='font-medium flex flex-col gap-6'>
          <p className='text-4xl'>Side Sofa</p>
          <button className='w-[125px] h-[49px] text-2xl border-black border-b-2'>View More</button>
        </div>
      </div>

    </div>

    <div className=' flex flex-col items-center justify-around w-full h-[750px] bg-white'>
      <div className='flex flex-col items-center font-medium gap-5'>
        <p className=' text-4xl'>Top Picks For You</p>
        <p className=' text-base text-[#9f9f9f]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      </div>

      <div className='flex items-center justify-around gap-5'>
        <ProductCard imageUrl="/pick1.png" price="RS. 25,000" title="Trenton modular sofa with pillow"/>
        <ProductCard imageUrl="/pick2.png" price="RS. 25,000" title="Granite dining table with dining chair"/>
        <ProductCard imageUrl="/pick3.png" price="RS. 25,000" title="Outdoor bar minimal table and stool"/>
        <ProductCard imageUrl="/pick4.png" price="RS. 25,000" title="Plain wooden console with teak mirror"/>
      </div>

      <div>
        <button className=' w-[115px] h-[45px] border-black border-b-2 font-medium text-center text-xl'>View More</button>
      </div>

    </div>

    <div className='w-full h-[550px] flex items-center justify-between bg-[#FFF9E5]'>
      <div>
        <Image src={"/asgaardsofa.png"} alt='assgardsofa' width={800} height={0}></Image>
      </div>
      <div className=' flex flex-col items-center justify-between mr-10 text-center gap-10'>
        <div>
          <p className=' font-medium text-2xl'>New Arrivals</p>
          <p className=' font-bold text-5xl'>Asgaard Sofa</p>
        </div>
        <div>
          <button className=' font-normal text-xl border-[1px] py-2 px-8 border-black'>Order Now</button>
        </div>
      </div>
    </div>

    <div className=' flex flex-col items-center justify-around w-full h-[850px] bg-slate-100'>
      <div className='flex flex-col items-center font-medium gap-5'>
        <p className=' text-4xl'>Our Blogs</p>
        <p className=' text-base text-[#9f9f9f]'>Find a bright ideal to suit your taste with our great selection</p>
      </div>

      <div className='flex items-center justify-around gap-5'>
        <BlogCard imageUrl={"/blog1.png"} title={"Going all-in with millennial design"}/>
        <BlogCard imageUrl={"/blog2.png"} title={"Going all-in with millennial design"}/>
        <BlogCard imageUrl={"/blog3.png"} title={"Going all-in with millennial design"}/>
      </div>

      <div className='text-center'>
        <button className=' w-[150px] h-[49px] border-black border-b-2 font-medium text-center text-xl'>View All Posts</button>
      </div>

    </div>

    <div className=' w-full h-[395px] bg-cover bg-center flex items-center justify-center' style={{backgroundImage: `url("instabg.png")`}}>
      
      <div className='flex flex-col items-center justify-between gap-5'>
        <div className=' flex flex-col items-center gap-5'> 
          <p className='font-bold text-6xl'>Our Instagram</p>
          <p className='font-normal text-xl'>Follow Our Store On Instagram</p>
        </div>
        <div>
          <button className=' w-[250px] h-[60px] bg-[#FAF4F4] rounded-full drop-shadow-2xl'>Follow Us</button>
        </div>
      </div>
    </div> 

  </div>
  )
}

export default HomePage