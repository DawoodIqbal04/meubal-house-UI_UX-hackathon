import React from "react";
import Header from "../components/header";
import Image from "next/image";
import ShopInfo from "../components/ShopInfo";

const page = () => {
  return (
    <div>
      <Header bgcolor="white" />
      <div
        style={{ backgroundImage: `url("/shopbg.png")` }}
        className=" w-full h-[315px] flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <Image src={"/Logo.png"} alt="Logo" width={77} height={77}></Image>
          </div>
          <div className=" text-5xl font-medium">
            <p>My Account</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] bg-white">
        <div>
            
        </div>
        <div></div>
      </div>
      <ShopInfo />
    </div>
  );
};

export default page;
