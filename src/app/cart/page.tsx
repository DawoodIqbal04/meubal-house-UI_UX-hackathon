import Image from "next/image";
import React from "react";
import Header from "../components/header";
import ShopInfo from "../components/ShopInfo";
import PageToper from "../components/PageToper";
import Link from "next/link";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Header bgcolor="white" />
      </div>
      <div>
        <PageToper name="Cart" />
      </div>
      <div className="min-h-[500px] flex justify-center items-start pt-16 p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 xs:flex md:flex-col xs:flex-row md:items-start xs:items-center bg-white rounded-lg ">
            <div className="flex md:flex-row xs:flex-col md:items-center xs:items-start justify-between md:w-full md:pr-0 xs:pr-5 md:h-[55px] xs:h-48 bg-yellow-50 text-gray-600 font-bold md:text-base xs:text-[15px] uppercase">
              <div className="w-1/2 md:h-6 xs:h-16 md:ml-5">Product</div>
              <div className="w-1/4 text-center">Price</div>
              <div className="w-1/6 text-center">Quantity</div>
              <div className="w-1/4 text-center">Subtotal</div>
            </div>

            <div className="flex md:flex-row xs:flex-col lg:gap-[85px] md:gap-[70px] md:items-center xs:gap-4 md:mt-10 py-4 px-2 text-base">
              <div className="flex md:items-center xs:items-start md:w-1/2">
                <div className="w-20 h-16 relative bg-yellow-100 rounded-md overflow-hidden">
                  <Image
                    src="/asgaardsofa.png"
                    alt="Asgaard Sofa"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <span className="ml-4 text-gray-800 font-medium">
                  Asgaard Sofa
                </span>
              </div>

              <div className="md:w-1/4 xs:w-[70%] text-center text-gray-800">
                Rs. 250,000.00
              </div>

              <div className="w-1/6 text-center">
                <input
                  type="number"
                  defaultValue="1"
                  className="w-12 border border-gray-300 outline-none rounded-md text-center focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div className="md:w-1/4 xs:w-[70%] text-center text-gray-800">
                Rs. 250,000.00
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 flex flex-col items-center justify-center gap-8 rounded-lg p-6">
            <p className="text-3xl font-bold text-gray-800 mb-6">Cart Totals</p>
            <div className="flex items-center gap-8 justify-between mb-3">
              <span className="font-semibold text-gray-600">Subtotal</span>
              <span className="text-gray-800">Rs. 250,000.00</span>
            </div>
            <div className="flex items-center gap-8 justify-between mb-6">
              <span className="font-semibold text-gray-800">Total</span>
              <span className="font-bold text-yellow-600 text-xl">
                Rs. 250,000.00
              </span>
            </div>
            <Link
              href={"/checkout"}
              className="flex items-center justify-center w-3/5 h-12 bg-transparent text-black border transition border-black rounded-md hover:bg-yellow-400 hover:border-none"
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>
      <ShopInfo />
    </div>
  );
};

export default page;
