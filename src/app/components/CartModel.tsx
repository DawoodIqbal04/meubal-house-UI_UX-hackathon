import React from "react";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import Link from "next/link";

const CartModel = () => {
  return (
    <div className=" absolute lg:-right-20 md:-right-8 xs:-right-4 -top-[160%] z-50 w-[100vw] h-[711vh] bg-[#00000030]">
      <div className="lg:w-[30vw] md:w-[50vw] xs:w-[70vw] min-h-[105vh] bg-white absolute right-0 md:p-6 xs:px-[3vw] xs:py-8">
        <div className="lg:text-2xl md:text-xl xs:text-xl font-semibold lg:h-14 md:h-12 xs:h-10 border-gray-300 border-b-2">
          <p>Shopping Cart</p>
        </div>
        <div className="w-[99.9%] h-[20vh] flex items-center justify-between mt-10">
          <div className="md:w-[111px] md:h-[95px] xs:h-[21vw] xs:w-[25vw] rounded-md bg-[#FBEBB5]">
            <Image
              src={"/asgaardsofa.png"}
              alt=""
              width={111}
              height={110}
              // fill
            ></Image>
          </div>
          <div>
            <div>
              <span className="xs:font-normal md:text-base xs:text-sm">Asgaard Sofa</span>
            </div>
            <div>
              <span className="md:text-base xs:text-sm font-normal">1</span> x{" "}
              <span className="md:text-xs xs:text-[10px] font-medium text-[#B88E2F]">
                RS. 250000
              </span>
            </div>
          </div>
          <div>
            <MdCancel cursor={"pointer"} size={20} />
          </div>
        </div>
        <div className=" lg:mt-60 md:mt-44 xs:mt-52 h-12 border-gray-300 border-b-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-normal">Subtotal</p>
            </div>
            <div>
              <span className="text-base font-extrabold text-[#B88E2F]">
                RS. 250000
              </span>
            </div>
          </div>
          <div className="flex items-center justify-around mt-10">
            <div className="flex items-center justify-center md:w-[130px] md:h-[30px] xs:w-[100px] xs:h-[30px] border-black border-[1px] md:rounded-3xl xs:rounded-2xl">
              <Link href={"/cart"}>View Cart</Link>
            </div>
            <div className="flex items-center justify-center md:w-[130px] md:h-[30px] xs:w-[100px] xs:h-[30px] border-black border-[1px] md:rounded-3xl xs:rounded-2xl">
              <Link href={"/checkout"}>CheckOut</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
