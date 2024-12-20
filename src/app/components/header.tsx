"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartModel from "./CartModel";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = (props: { bgcolor: string; }) => {

  const [isCartOpen, setIsCartOpen] = useState(false)



  return (
    <div className={`h-[100px] w-full bg-[${props.bgcolor}] flex items-center justify-around`}>
      <div className="flex items-center">
        <div>
          <Image src={"/Logo.png"} height={75} width={75} alt="Logo"></Image>
        </div>
        <div className=" font-bold uppercase text-xl cursor-default">
          <p>Meubel House</p>
        </div>
      </div>

      <div>
        <ul className="flex items-center gap-12 font-medium text-base">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className=" flex items-center justify-between gap-8 relative">
        <div>
          <Link href={""}>
            <IoPersonOutline size={25} />
          </Link>
        </div>
        <div>
          <Link href={""}>
            <IoSearchOutline size={25} />
          </Link>
        </div>
        <div>
          <Link href={""}>
            <IoHeartOutline size={25} />
          </Link>
        </div>
        <div className="relative">
          <div>
            <div className="flex items-center justify-center absolute w-[18px] h-[18px] top-[-20%] right-[-20%] rounded-full text-white text-[13px] bg-red-500 cursor-pointer">
              <span>1</span>
            </div>
            <AiOutlineShoppingCart size={25} cursor={"pointer"} onClick={()=>setIsCartOpen((prev)=>!prev)}/>
              {isCartOpen && (<CartModel />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
