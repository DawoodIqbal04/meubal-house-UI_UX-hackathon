import React from 'react'
import Link from 'next/link'
import { IoArrowForward } from "react-icons/io5";


const CategoryModel = () => {
  return (
    <div className='absolute hidden md:flex flex-col items-start gap-7 w-60 h-60 bg-[#f1eded] shadow-xl p-4'>
        <div className='flex items-center gap-2 font-bold hover:underline'>
            <Link href={'/shop'}>Shop All </Link>
            <div>
            <IoArrowForward />
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='font-bold'>
                <p>Shop By Category</p>
            </div>
            <div className='flex flex-col gap-2'>
                <Link className='hover:underline' href={'/Bedroom'}>Bed Room</Link>
                <Link className='hover:underline' href={'/Livingroom'}>Living Room</Link>
                <Link className='hover:underline' href={'/Outdoor'}>Outdoor</Link>
                <Link className='hover:underline' href={'/Diningroom'}>Dining Room</Link>
            </div>
        </div>
    </div>
  )
}

export default CategoryModel