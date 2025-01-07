import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../components/header";
import PageToper from "../components/PageToper";
import ShopInfo from "../components/ShopInfo";
import { FaTag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div>
        <Header bgcolor="white" />
      </div>
      <div>
        <PageToper name="Blogs" />
      </div>
      <div className="w-full flex lg:flex-row xs:flex-col-reverse items-start justify-between gap-16 py-10 lg:pt-20 lg:px-20 md:px-10 xs:px-4">
        <div className="flex flex-col items-start justify-between lg:gap-10 md:gap-20 xs:gap-10">
          <div className="bg-white flex flex-col items-start justify-between lg:w-[750px] xs:w-full lg:h-[650px] xs:h-[88vh] rounded-lg overflow-hidden">
            <div className="relative w-full h-[400px]">
              <Image
                src="/bpage1.png"
                alt="Millennial Design"
                fill
                objectFit="cover"
              />
            </div>
            <div className="md:p-5 w-full h-[250px] flex flex-col items-start md:gap-0 xs:gap-3 md:justify-between">
              <div className=" flex items-center md:gap-5 xs:gap-7 md:text-base xs:text-xs text-gray-400">
                <div className="flex items-center md:gap-3 xs:gap-2">
                  <FaUser />
                  <p>Adimin</p>
                </div>
                <div className="flex items-center md:gap-3 xs:gap-2">
                  <IoCalendarClear />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex items-center md:gap-3 xs:gap-2">
                  <FaTag />
                  <p>Handmade</p>
                </div>
              </div>
              <p className="md:text-[25px] xs:text-lg font-medium mb-2">
                Going all-in with millennial design
              </p>
              <p className="text-gray-600 md:text-sm xs:text-xs md:mb-4 xs:mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aut, dignissimos similique cumque omnis expedita nemo
                eius, quo sed, doloribus est sunt! Quod cupiditate optio
                corporis illo necessitatibus, alias impedit?
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-500 md:text-base xs:text-sm font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col items-start justify-between lg:w-[750px] xs:w-100% lg:h-[650px] xs:h-[88vh] rounded-lg overflow-hidden">
            <div className="relative w-full h-[400px]">
              <Image
                src="/bpage2.png"
                alt="Millennial Design"
                fill
                objectFit="cover"
              />
            </div>
            <div className="md:p-5 w-full h-[250px] flex flex-col items-start md:gap-0 xs:gap-3 md:justify-between">
              <div className=" flex items-center md:gap-5 xs:gap-7 md:text-base xs:text-xs text-gray-400">
                <div className="flex items-center md:gap-3 xs:gap-2">
                  <FaUser />
                  <p>Adimin</p>
                </div>
                <div className="flex items-center md:gap-3 xs:gap-2">
                  <IoCalendarClear />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex items-center md:gap-3 xs:gap-2">
                  <FaTag />
                  <p>Handmade</p>
                </div>
              </div>
              <p className="md:text-[25px] xs:text-lg font-medium mb-2">
                Going all-in with millennial design
              </p>
              <p className="text-gray-600 md:text-sm xs:text-xs md:mb-4 xs:mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aut, dignissimos similique cumque omnis expedita nemo
                eius, quo sed, doloribus est sunt! Quod cupiditate optio
                corporis illo necessitatibus, alias impedit?
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-500 md:text-base xs:text-sm font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col items-start justify-between lg:w-[750px] xs:100% lg:h-[650px] xs:h-[88vh] rounded-lg overflow-hidden">
            <div className="relative w-full h-[400px]">
              <Image
                src="/bpage3.png"
                alt="Millennial Design"
                fill
                objectFit="cover"
              />
            </div>
            <div className="md:p-5 w-full h-[250px] flex flex-col items-start md:gap-0 xs:gap-3 md:justify-between">
              <div className=" flex items-center md:gap-5 xs:gap-7 md:text-base xs:text-xs text-gray-400">
                <div className="flex items-center md:gap-3 xs:gap-2">
                  <FaUser />
                  <p>Adimin</p>
                </div>
                <div className="flex items-center md:gap-3 xs:gap-2">
                  <IoCalendarClear />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex items-center md:gap-3 xs:gap-2">
                  <FaTag />
                  <p>Handmade</p>
                </div>
              </div>
              <p className="md:text-[25px] xs:text-lg font-medium mb-2">
                Going all-in with millennial design
              </p>
              <p className="text-gray-600 md:text-sm xs:text-xs md:mb-4 xs:mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aut, dignissimos similique cumque omnis expedita nemo
                eius, quo sed, doloribus est sunt! Quod cupiditate optio
                corporis illo necessitatibus, alias impedit?
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-500 md:text-base xs:text-sm font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-col md:flex-row xs:flex-col lg:mt-10 lg:gap-20 md:gap-0 xs:gap-16 lg:pl-0 md:pl-10 xs:pl-7 ">
          <div className="w-[390px]">
            <div className="flex items-center gap-2 bg-white border border-gray-400 w-max p-2 rounded-md mb-8">
              <input
                type="text"
                className=" outline-none border-none bg-transparent"
              />
              <button>
                <IoSearchOutline size={25} />
              </button>
            </div>
            <div>
              <p className="text-2xl font-medium md:mb-10 xs:mb-6">
                Categories
              </p>
            </div>
            <div className="space-y-2 font-normal text-base text-gray-400 flex flex-col items-start md:gap-10 xs:gap-5">
              <div className="flex items-center justify-between w-3/5">
                <div>Craft</div>
                <div>2</div>
              </div>
              <div className="flex items-center justify-between w-3/5">
                <div>Design</div>
                <div>8</div>
              </div>
              <div className="flex items-center justify-between w-3/5">
                <div>Interior</div>
                <div>7</div>
              </div>
              <div className="flex items-center justify-between w-3/5">
                <div>Handmade</div>
                <div>1</div>
              </div>
              <div className="flex items-center justify-between w-3/5">
                <div>Wood</div>
                <div>6</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start ">
            <div>
              <p className="text-2xl font-medium md:mb-10 xs:mb-6">
                Recent Posts
              </p>
            </div>
            <div className="w-[250px] flex flex-col items-start justify-center gap-5">
              <div className="flex flex-col md:gap-5 xs:gap-2">
                <Link href={""}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center w-20 h-20">
                      <Image
                        src="/recent1.png"
                        alt="Recent Post"
                        width={300}
                        height={80}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-gray-700 text-sm font-normal">
                        Going all-in with millennial design
                      </p>
                      <p className="text-xs font-normal text-gray-400">
                        Oct 12, 2023
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center w-20 h-20">
                      <Image
                        src="/recent2.png"
                        alt="Recent Post"
                        width={300}
                        height={80}
                        objectFit="contain"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-gray-700 text-sm font-normal">
                        Exploring new ways of decorating
                      </p>
                      <p className="text-xs font-normal text-gray-400">
                        Nov 14, 2023
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center w-24 h-20">
                      <Image
                        src="/recent3.png"
                        alt="Recent Post"
                        width={300}
                        height={80}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-gray-700 text-sm font-normal">
                        Handmade pieces that took time to make
                      </p>
                      <p className="text-xs font-normal text-gray-400">
                        Dec 10, 2023
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center w-20 h-20">
                      <Image
                        src="/recent4.png"
                        alt="Recent Post"
                        width={300}
                        height={80}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-gray-700 text-sm font-normal">
                        Modern home in Milan with furniture
                      </p>
                      <p className="text-xs font-normal text-gray-400">
                        Oct 12, 2023
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center w-20 h-20">
                      <Image
                        src="/recent5.png"
                        alt="Recent Post"
                        width={300}
                        height={80}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-gray-700 text-sm font-normal">
                        Colorful office redesign, must watch
                      </p>
                      <p className="text-xs font-normal text-gray-400">
                        Oct 12, 2023
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 my-10">
        <div className="flex items-center justify-center md:w-[60px] xs:w-[40px] md:h-[60px] xs:h-[40px] rounded-[10px] cursor-pointer bg-[#FBEBB5]">
          <span>1</span>
        </div>
        <div className="flex items-center justify-center md:w-[60px] xs:w-[40px] md:h-[60px] xs:h-[40px] rounded-[10px] cursor-pointer bg-[#FFF9E5]">
          <span>2</span>
        </div>
        <div className="flex items-center justify-center md:w-[60px] xs:w-[40px] md:h-[60px] xs:h-[40px] rounded-[10px] cursor-pointer bg-[#FFF9E5]">
          <span>3</span>
        </div>
        <div className="flex items-center justify-center md:w-[100px] xs:w-[70px] md:h-[60px] xs:h-[40px] rounded-[10px] cursor-pointer bg-[#FFF9E5]">
          <span>Next</span>
        </div>
      </div>
      <div>
        <ShopInfo />
      </div>
    </div>
  );
};

export default page;
