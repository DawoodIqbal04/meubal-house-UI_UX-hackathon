import React from "react";

const ShopInfo = () => {
  return (
    <div
      className={`w-full lg:h-[300px] md:h-[250px] xs:h-[90vh] bg-[#FAF4F4] flex md:flex-row xs:flex-col items-center justify-evenly`}
    >
      <div className="lg:w-[300px] md:w-[200px] xs:w-[250px] h-[108px]">
        <div className="font-medium lg:text-3xl md:text-2xl xs:text-xl">
          Free Delivery
        </div>
        <div className="font-normal lg:text-xl md:text-lg md:mt-0 xs:mt-3 text-[#9F9F9F]">
          For all oders over $80, you get free delivery.
        </div>
      </div>
      <div className="lg:w-[300px] md:w-[200px] xs:w-[250px] h-[108px]">
        <div className="font-medium lg:text-3xl md:text-2xl xs:text-xl">
          90 Days Return
        </div>
        <div className="font-normal lg:text-xl md:text-lg md:mt-0 xs:mt-3 text-[#9F9F9F]">
          If goods have minor problem, you can change it under 90 days
        </div>
      </div>
      <div className="lg:w-[300px] md:w-[200px] xs:w-[250px] h-[108px]">
        <div className="font-medium lg:text-3xl md:text-2xl xs:text-xl">
          Secure Payment
        </div>
        <div className="font-normal lg:text-xl md:text-lg md:mt-0 xs:mt-3 text-[#9F9F9F]">
          100% secure payments in all of cards
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
