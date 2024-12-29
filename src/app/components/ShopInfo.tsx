import React from "react";

const ShopInfo = () => {
  return (
    <div
      className={`w-full h-[300px] bg-[#FAF4F4] flex items-center justify-evenly`}
    >
      <div className="w-[300px]  h-[108px]">
        <div className="font-medium text-3xl">Free Delivery</div>
        <div className="font-normal text-xl text-[#9F9F9F]">
          For all oders over $80, you get free delivery.
        </div>
      </div>
      <div className="w-[300px]  h-[108px]">
        <div className="font-medium text-3xl">90 Days Return</div>
        <div className="font-normal text-xl text-[#9F9F9F]">
          If goods have minor problem, you can change it under 90 days
        </div>
      </div>
      <div className="w-[300px]  h-[108px]">
        <div className="font-medium text-3xl">Secure Payment</div>
        <div className="font-normal text-xl text-[#9F9F9F]">
          100% secure payments in all of cards
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
