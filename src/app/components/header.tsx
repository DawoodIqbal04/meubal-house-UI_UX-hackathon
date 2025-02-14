"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MenuModel from "./MenuModel";
import CategoryModel from "./CategoryModel";
import { useShoppingCart } from "use-shopping-cart";
import SearchModel from "./SearchModel";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = (props: { bgcolor: string; placeHolder: string }) => {
  const { handleCartClick, cartCount } = useShoppingCart();

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div
      className={`lg:h-[100px] md:h-[80px] xs:h-[60px] w-full bg-[${props.bgcolor}] flex items-center lg:justify-around md:justify-around xs:justify-between lg:px-0 md:px-0 xs:px-6`}
    >
      <div className="flex items-center md:justify-normal md:w-auto xs:justify-between xs:w-full">
        <div className="flex items-center md:hidden lg:hidden gap-4">
          <div>
            <MenuModel />
          </div>
        </div>
        <div className="flex items-center">
          <div className="lg:h-[75px] lg:w-[75px] md:h-[70px] md:w-[70px] xs:h-[65px] xs:w-[65px]">
            <Image src={"/Logo.png"} height={75} width={75} alt="Logo"></Image>
          </div>
          <div className=" font-bold uppercase lg:text-xl md:text-lg xs:text-base xs:-mr-1 cursor-default">
            <p>Meubel House</p>
          </div>
        </div>
        <div className="relative cursor-pointer md:hidden xs:flex items-center gap-3">
          <button onClick={() => handleCartClick()}>
            <div className="flex items-center justify-center absolute w-[16px] h-[16px] top-[-5%] right-[50%] rounded-full text-white text-[11px] bg-red-500 cursor-pointer">
              <span>{cartCount}</span>
            </div>
            <AiOutlineShoppingCart size={25} cursor={"pointer"} />
          </button>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
      <div className="md:flex xs:hidden">
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

      <div className="md:flex xs:hidden items-center justify-between lg:gap-8 md:gap-4 relative">
        <div>
          <SearchModel placeholder={props.placeHolder} />
        </div>
        <div>
          <Link href={""}>
            <IoHeartOutline size={25} />
          </Link>
        </div>
        <div className="relative" onClick={() => handleCartClick()}>
          <div>
            <div className="flex items-center justify-center absolute w-[18px] h-[18px] top-[-20%] right-[-20%] rounded-full text-white text-[13px] bg-red-500 cursor-pointer">
              <span>{cartCount}</span>
            </div>
            <AiOutlineShoppingCart size={25} cursor={"pointer"} />
          </div>
        </div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
