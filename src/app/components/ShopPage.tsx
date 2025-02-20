import React from "react";
import PageToper from "./PageToper";
import { LuFilter } from "react-icons/lu";

const ShopPage = () => {
  return (
    <div className="overflow-x-hidden">
      <PageToper name="Shop" url="shop"/>
      <div className="flex items-center justify-around w-full lg:h-[100px] md:h-[80px] xs:h-[120px] bg-[#FAF4F4]">
        <div className="flex items-center lg:gap-3 md:gap-1">
          <div className="flex lg:flex-row md:flex-col items-center lg:pr-0 md:pr-3 lg:gap-8 md:gap-2">
            <div className="flex items-center lg:gap-2 md:gap-1">
              <div>
                <LuFilter  size={22} />
              </div>
              <div className="font-normal lg:text-xl md:text-base xs:text-sm">
                <p>Filter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row xs:flex-col md:items-center xs:items-start lg:gap-10 md:gap-6 font-normal lg:text-xl md:text-lg xs:text-base">
          <div className="flex items-center lg:gap-5 md:gap-3 xs:gap-1">
            <div>
              <p>Show</p>
            </div>
            <div className="md:w-[55px] md:h-[55px] xs:w-[45px] xs:h-[45px] bg-white text-gray-400 flex items-center justify-center">
              <span>16</span>
            </div>
          </div>
          <div className="flex items-center lg:gap-5 md:gap-3 xs:gap-1">
            <div>
              <p>Sort By</p>
            </div>
            <div className="lg:w-[180px] md:w-[140px] xs:w-[100px] md:h-[55px] xs:h-[45px] bg-white text-gray-400 flex items-center justify-center">
              <span>Default</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
