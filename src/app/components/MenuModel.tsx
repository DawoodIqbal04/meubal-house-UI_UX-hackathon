import Link from "next/link";
import React from "react";
import { IoHeartOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";

const MenuModel = () => {

  return (
    <div className="absolute transition-all -right-[59px] -top-[17.5px] w-[100vw] h-[711vh] bg-[#00000030]">
      <div className="absolute right-0 w-[70vw] h-[100vh] px-10 py-6 bg-white">
        <div>
            <p className="text-xl font-semibold text-[#e4c354]">Menu</p>
        </div>
        <div className="w-full border-b-2 pb-4 border-gray-300">
          <ul className="flex flex-col items-start mt-10 gap-16 font-medium text-base">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className=" flex items-center justify-between mt-10 gap-8 relative">
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
      </div>
      </div>
    </div>
  );
};

export default MenuModel;
