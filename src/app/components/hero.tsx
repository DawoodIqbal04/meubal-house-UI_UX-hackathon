import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" w-full md:w-[100vw] xs:w-[100vw] lg:h-[calc(100vh-100px)] md:h-[calc(100vh-80px)] xs:h-[calc(100vh-60px)] flex md:flex-row-reverse xs:flex-col items-center md:justify-between xs:justify-center lg:pr-20 lg:pl-24 md:pr-10 md:pl-12 font-medium bg-[#FBEBB5]">
      <div className="md:w-[510px] xs:w-[320px]">
        <Image
          src={"/heroimage.png"}
          height={0}
          width={510}
          alt="Rocket Single Seater"
        ></Image>
      </div>
      <div className=" flex flex-col md:items-start xs:items-center lg:gap-10 md:gap-5 xs:gap-3 lg:text-left md:text-left xs:text-center">
        <p className=" lg:text-6xl md:text-5xl xs:text-4xl">
          Rocket Single <br className="md:flex xs:hidden" />
          Seater
        </p>
        <button
          type="button"
          className="lg:text-2xl md:text-xl xs:text-xl lg:w-[121px] xs:w-max lg:h-[50px] md:h-[40px] border-black border-b-2"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
