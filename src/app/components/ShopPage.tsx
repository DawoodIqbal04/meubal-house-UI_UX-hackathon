import React from 'react'
import Image from 'next/image'
import ShopProducts from './ShopProducts';
import { BsFillGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";


const ShopPage = () => {
  return (
    <div>
        <div style={{backgroundImage: `url("/shopbg.png")`}}  className=' w-full h-[315px] flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <div>
              <Image src={"/Logo.png"} alt='Logo' width={77} height={77}></Image>
            </div>
            <div className=' text-5xl font-medium'>
              <p>Shop</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-around w-full h-[100px] bg-[#FAF4F4]'>
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-8'>
              <div className='flex items-center gap-2'>
                <div><LuSettings2 size={22}/></div>
                <div className='font-normal text-xl'><p>Filter</p></div>
              </div>
              <div><BsFillGridFill size={22}/></div>
              <div><BsViewList size={22}/></div>
            </div>
            <div className='border-gray-500 border-l-2 font-normal text-base'>
              <p className='ml-5'>Showing 1–16 of 32 results</p>
            </div>
          </div>
          <div className='flex items-center gap-10 font-normal text-xl'>
            <div className='flex items-center gap-5'>
              <div><p>Show</p></div>
              <div className='w-[55px] h-[55px] bg-white text-gray-400 flex items-center justify-center'><span>16</span></div>
            </div>
            <div className='flex items-center gap-5'>
              <div><p>Sort By</p></div>
              <div className='w-[180px] h-[55px] bg-white text-gray-400 flex items-center justify-center'><span>Default</span></div>
            </div>
          </div>
        </div>
        <div>
          <ShopProducts />
        </div>
    </div>
  )
}

export default ShopPage

