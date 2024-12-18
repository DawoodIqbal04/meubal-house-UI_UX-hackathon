import React from 'react'
import Image from 'next/image'
import Header from '../components/header'
import ShopInfo from '../components/ShopInfo'
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";


const page = () => {
  return (
    <div>
        <Header bgcolor={"white"}/>
        <div style={{backgroundImage: `url("/shopbg.png")`}}  className=' w-full h-[315px] flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
            <div>
                <Image src={"/Logo.png"} alt='Logo' width={77} height={77}></Image>
            </div>
            <div className=' text-5xl font-medium'>
                <p>Contact</p>
            </div>
            </div>
        </div>
        <div className='w-full min-h-[150vh] flex flex-col items-center justify-around py-20'>
            <div className='w-[650px] text-center flex flex-col gap-3'>
                <p className='text-4xl font-semibold'>Get In Touch With Us</p>
                <p className='text-base font-normal text-[#9f9f9f]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className='w-full flex items-start mt-20 justify-evenly'>
                <div className='flex flex-col gap-10'>
                    <div className='flex items-start w-[245px] gap-6'>
                        <div><MdLocationPin size={28} /></div>
                        <div>
                            <div className='font-medium text-2xl'><p>Address</p></div>
                            <div className='font-normal text-base'><p>236 5th SE Avenue, New York NY10000, United States</p></div>
                        </div>
                    </div>
                    <div className='flex items-start w-[245px] gap-6'>
                        <div><MdLocalPhone size={28} /></div>
                        <div>
                            <div className='font-medium text-2xl'><p>Phone</p></div>
                            <div className='font-normal text-base'><p>Mobile: +(84) 546-6789
                            Hotline: +(84) 456-6789</p></div>
                        </div>
                    </div>
                    <div className='flex items-start w-[245px] gap-6'>
                        <div><BsClockFill size={28} /></div>
                        <div>
                            <div className='font-medium text-2xl'><p>Working Time</p></div>
                            <div className='font-normal text-base'><p>Monday-Friday: 9:00 - 22:00 <br />
                            Saturday-Sunday: 9:00 - 21:00</p></div>
                        </div>
                    </div>
                </div>
                
                
                <div className='flex items-center justify-center w-[630px] min-h-[100vh]'>
                    <form className='flex flex-col gap-7'>
                        <div className='flex flex-col items-start text-base gap-5'>
                            <label className='font-medium' htmlFor="">Your Name</label>
                            <input type="text" className='font-normal border-black border-[1px] pl-5 h-[70px] w-[500px] rounded-lg' placeholder='John Fernandes' />
                        </div>
                        <div className='flex flex-col items-start text-base gap-5'>
                            <label className='font-medium' htmlFor="">Email Address</label>
                            <input type="text" className='font-normal border-black border-[1px] pl-5 h-[70px] w-[500px] rounded-lg' placeholder='j.fernandes@gmail.com' />
                        </div>
                        <div className='flex flex-col items-start text-base gap-5'>
                            <label className='font-medium' htmlFor="">Subject</label>
                            <input type="text" className='font-normal border-black border-[1px] pl-5 h-[70px] w-[500px] rounded-lg' placeholder='contact' />
                        </div>
                        <div className='flex flex-col items-start text-base gap-5'>
                            <label className='font-medium' htmlFor="">Massege</label>
                            <textarea className='font-normal border-black border-[1px] pl-5 pt-5 h-[210px] w-[500px] rounded-lg'  placeholder='Hi; I like to ask about' />
                        </div>
                        <div>
                            <button type='submit' className='w-[230px] h-[48px] border-black border-[2px] rounded-xl mt-10'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <ShopInfo />
    </div>
  )
}

export default page