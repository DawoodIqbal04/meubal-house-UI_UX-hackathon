import React from "react";
import Image from "next/image";

const PageToper = (props: { name: string }) => {
  return (
    <div
      style={{ backgroundImage: `url("/shopbg.png")` }}
      className=" w-full lg:h-[315px] md:h-[220px] xs:h-[160px] flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image src={"/Logo.png"} alt="Logo" width={77} height={77}></Image>
        </div>
        <div className=" lg:text-5xl md:text-4xl xs:text-3xl font-medium">
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PageToper;
