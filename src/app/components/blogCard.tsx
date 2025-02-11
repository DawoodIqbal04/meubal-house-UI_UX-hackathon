import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const BlogCard = (props: {
  imageUrl: string | StaticImport;
  title: string;
}) => {
  return (
    <div className="lg:w-[360px] md:w-[300px] xs:w-[330px] lg:h-[510px] md:h-[450px] xs:h-[350px]">
      <div className=" w-full lg:h-[350px] xs:h-[300px] rounded-lg">
        <Image
          src={props.imageUrl}
          alt={props.title}
          width={390}
          height={550}
          className=" object-cover"
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-center lg:gap-2 md:gap-3 xs:gap-1 lg:mt-10 md:mt-5 xs:mt-10">
        <p className="lg:font-normal xs:font-medium lg:text-xl xs:text-base xs:text-center">
          {props.title}
        </p>
        <button className=" lg:w-[130px] md:w-max lg:h-[40px] md:h-[30px] border-black border-b-2 font-medium lg:text-2xl md:text-xl">
          Read More
        </button>
        <div className=" flex items-center justify-center gap-2 mt-1 font-light lg:text-base md:text-sm">
          <div className=" flex items-center gap-1 ">
            <HiOutlineClock />
            <p>5 min</p>
          </div>
          <div className=" flex items-center gap-1">
            <FiCalendar />
            <p>12th October 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
