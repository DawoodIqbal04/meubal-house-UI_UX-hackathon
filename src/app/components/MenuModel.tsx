import Link from "next/link";
import React from "react";
import { IoHeartOutline, IoSearchOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CgMenuLeft } from "react-icons/cg";

const MenuModel = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center md:hidden lg:hidden gap-4">
          <div>
            <CgMenuLeft size={25} />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start w-full h-full justify-between">
          <div className="absolute right-0 w-[70vw] h-[100vh] px-4 py-6 bg-white">
            <div className="w-full border-b-2 pb-8 border-gray-300">
              <ul className="flex flex-col items-start mt-6 gap-6 font-medium text-base">
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
              <p className="text-xl font-semibold mt-7 text-[#e4c354]">
                Shop By Category
              </p>
              <ul className="mt-6 flex flex-col items-start gap-6 text-base font-medium">
                <li>
                  <Link href={"/Bedroom"}>Bed Room</Link>
                </li>
                <li>
                  <Link href={"/Outdoor"}>Outdoor</Link>
                </li>
                <li>
                  <Link href={"/Livingroom"}>Living Room</Link>
                </li>
                <li>
                  <Link href={"/Diningroom"}>Dining Room</Link>
                </li>
              </ul>
            </div>
            <div className=" flex items-center mt-10 gap-16 relative">
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
      </SheetContent>
    </Sheet>
  );
};

export default MenuModel;
