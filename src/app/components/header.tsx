"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartModel from "./CartModel";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import MenuModel from "./MenuModel";
import CategoryModel from "./CategoryModel";

const Header = (props: { bgcolor: string }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`lg:h-[100px] md:h-[80px] xs:h-[60px] w-full bg-[${props.bgcolor}] flex items-center lg:justify-around md:justify-around xs:justify-between lg:px-0 md:px-0 xs:px-4`}
    >
      <div className="flex items-center">
        <div className="lg:h-[75px] lg:w-[75px] md:h-[70px] md:w-[70px] xs:h-[65px] xs:w-[65px]">
          <Image src={"/Logo.png"} height={75} width={75} alt="Logo"></Image>
        </div>
        <div className=" font-bold uppercase lg:text-xl md:text-lg xs:text-base xs:-mr-1 cursor-default">
          <p>Meubel House</p>
        </div>
      </div>

      <div className="lg:flex md:flex xs:hidden">
        <ul className="flex items-center lg:gap-12 md:gap-6 font-medium lg:text-base md:text-sm navlinks">
          <li className="relative">
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <Link href={"/shop"}>Shop</Link>
            {isCategoryOpen && <CategoryModel />}
          </li>
          <li className="relative">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="relative">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center md:hidden lg:hidden gap-4">
        <div
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden md:hidden xs:flex relative"
        >
          <CgMenuRight size={25} />
          {isMenuOpen && <MenuModel />}
        </div>
        <div className="relative lg:hidden md:hidden xs:flex">
          <div onClick={() => setIsCartOpen((prev) => !prev)}>
            <div className="flex items-center justify-center absolute w-[18px] h-[18px] top-[-20%] right-[-20%] rounded-full text-white text-[13px] bg-red-500 cursor-pointer">
              <span>1</span>
            </div>
            <AiOutlineShoppingCart size={25} cursor={"pointer"} />
            {isCartOpen && <CartModel />}
          </div>
        </div>
      </div>

      <div className=" lg:flex md:flex xs:hidden items-center justify-between lg:gap-8 md:gap-4 relative">
        <div>
          <Link href={"/account"}>
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
          <div onClick={() => setIsCartOpen((prev) => !prev)}>
            <div className="flex items-center justify-center absolute w-[18px] h-[18px] top-[-20%] right-[-20%] rounded-full text-white text-[13px] bg-red-500 cursor-pointer">
              <span>1</span>
            </div>
            <AiOutlineShoppingCart size={25} cursor={"pointer"} />
            {isCartOpen && <CartModel />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
