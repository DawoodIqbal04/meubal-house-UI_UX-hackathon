import React from "react";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import Link from "next/link";

const CartModel = () => {
  return (
    <div className=" absolute -right-20 top-16 z-50 w-[100vw] h-[711vh] bg-[#00000030]">
      <div className="w-[30vw] min-h-[calc(100vh-100px)] bg-white absolute right-0 p-6">
        <div className="text-2xl font-semibold h-14 border-gray-300 border-b-2">
          <p>Shopping Cart</p>
        </div>
        <div className="w-[99.9%] h-[20vh] flex items-center justify-between mt-10 bg-slate-100">
          <div className="w-[111px] rounded-md bg-[#FBEBB5]">
            <Image
              src={"/asgaardsofa.png"}
              alt=""
              width={111}
              height={90}
            ></Image>
          </div>
          <div>
            <div>
              <span className="font-normal text-base">Asgaard Sofa</span>
            </div>
            <div>
              <span className="text-base font-normal">1</span> x{" "}
              <span className="text-xs font-medium text-[#B88E2F]">
                RS. 250000
              </span>
            </div>
          </div>
          <div>
            <MdCancel cursor={"pointer"} size={20} />
          </div>
        </div>
        <div className="mt-36 h-10 border-gray-300 border-b-2">
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
            <div className="flex items-center justify-center w-[130px] h-[30px] border-black border-[1px] rounded-3xl">
              <Link href={"/cart"}>View Cart</Link>
            </div>
            <div className="flex items-center justify-center w-[130px] h-[30px] border-black border-[1px] rounded-3xl">
              <Link href={"/checkout"}>CheckOut</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
