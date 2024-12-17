import React from 'react'
import { HiOutlineClock } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";


const BlogCard = (props: any) => {
  return (
    <div className='w-[360px] h-[510px]'>
        <div className=' w-full h-[350px] rounded-lg'>
            <img src={props.imageUrl} alt={props.title} className=' object-cover'/>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 mt-10'>
            <p className='font-normal text-xl'>{props.title}</p>
            <button className=' w-[130px] h-[40px] border-black border-b-2 font-medium text-2xl'>Read More</button>
            <div className=' flex items-center justify-center gap-2 mt-1 font-light text-base'>
              <div className=' flex items-center gap-3 '>
                <HiOutlineClock />
                <p>5 min</p>
              </div>
              <div className=' flex items-center gap-1'>
                <FiCalendar />
                <p>12th October 2022</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard