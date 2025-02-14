import React from "react";
import Header from "../components/header";
import ShopInfo from "../components/ShopInfo";
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import PageToper from "../components/PageToper";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Header bgcolor="white" placeHolder="" />
      </div>
      <div>
        <PageToper name="Contact" />
      </div>

      <div className="w-full min-h-[150vh] flex flex-col items-center justify-around lg:py-20 md:py-16 xs:py-10">
        <div className="w-[650px] text-center flex flex-col gap-3">
          <p className="md:text-4xl xs:text-2xl font-semibold">
            Get In Touch With Us
          </p>
          <p className="md:text-base xs:text-xs font-normal text-[#9f9f9f]">
            For More Information About Our Product & Services.
            <br /> Please Feel Free To Drop Us An Email.
            <br /> Our Staff Always Be There To Help You Out.
            <br /> Do Not Hesitate!
          </p>
        </div>
        <div className="w-full flex lg:flex-row xs:flex-col lg:items-start xs:items-center mt-20 justify-evenly">
          <div className="flex flex-col gap-10 xs:pb-20">
            <div className="flex items-start w-[245px] gap-6">
              <div>
                <MdLocationPin size={28} />
              </div>
              <div>
                <div className="font-medium text-2xl">
                  <p>Address</p>
                </div>
                <div className="font-normal text-base">
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
            </div>
            <div className="flex items-start w-[245px] gap-6">
              <div>
                <MdLocalPhone size={28} />
              </div>
              <div>
                <div className="font-medium text-2xl">
                  <p>Phone</p>
                </div>
                <div className="font-normal text-base">
                  <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                </div>
              </div>
            </div>
            <div className="flex items-start w-[245px] gap-6">
              <div>
                <BsClockFill size={28} />
              </div>
              <div>
                <div className="font-medium text-2xl">
                  <p>Working Time</p>
                </div>
                <div className="font-normal text-base">
                  <p>
                    Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:w-[630px] xs:w-[100vw] min-h-[100vh]">
            <form className="flex flex-col gap-7">
              <div className="flex flex-col items-start text-base gap-5">
                <label className="font-medium" htmlFor="">
                  Your Name
                </label>
                <input
                  type="text"
                  className="font-normal border-black border-[1px] pl-5 h-[70px] md:w-[500px] xs:w-[90vw] rounded-lg"
                  placeholder="John Fernandes"
                />
              </div>
              <div className="flex flex-col items-start text-base gap-5">
                <label className="font-medium" htmlFor="">
                  Email Address
                </label>
                <input
                  type="text"
                  className="font-normal border-black border-[1px] pl-5 h-[70px] md:w-[500px] xs:w-[90vw] rounded-lg"
                  placeholder="j.fernandes@gmail.com"
                />
              </div>
              <div className="flex flex-col items-start text-base gap-5">
                <label className="font-medium" htmlFor="">
                  Subject
                </label>
                <input
                  type="text"
                  className="font-normal border-black border-[1px] pl-5 h-[70px] md:w-[500px] xs:w-[90vw] rounded-lg"
                  placeholder="contact"
                />
              </div>
              <div className="flex flex-col items-start text-base gap-5">
                <label className="font-medium" htmlFor="">
                  Massege
                </label>
                <textarea
                  className="font-normal border-black border-[1px] pl-5 pt-5 h-[210px] md:w-[500px] xs:w-[90vw] rounded-lg"
                  placeholder="Hi; I like to ask about"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[230px] h-[48px] transition-all border-black border rounded-xl mt-10 hover:bg-blue-500 hover:text-white hover:border-none "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ShopInfo />
    </div>
  );
};

export default page;
