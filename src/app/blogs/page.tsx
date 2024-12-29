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
      <div className="w-full flex items-start justify-between gap-16 py-10 pt-20 px-20">
        <div className="flex flex-col items-start justify-between gap-10">
          {/* Post 1 */}
          <div className="bg-white flex flex-col items-start justify-between w-[750px] h-[650px] rounded-lg overflow-hidden">
            <div className="relative w-full h-[400px]">
              <Image
                src="/bpage1.png"
                alt="Millennial Design"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 w-full h-[250px] flex flex-col items-start justify-between">
              <div className="flex items-center gap-5 text-base text-gray-400">
                <div className="flex items-center gap-3">
                  <FaUser />
                  <p>Adimin</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoCalendarClear />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaTag />
                  <p>Handmade</p>
                </div>
              </div>
              <p className="text-[25px] font-medium mb-2">
                Going all-in with millennial design
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aut, dignissimos similique cumque omnis expedita nemo
                eius, quo sed, doloribus est sunt! Quod cupiditate optio
                corporis illo necessitatibus, alias impedit?
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-500 font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white flex flex-col items-start justify-between w-[750px] h-[650px] rounded-lg overflow-hidden">
            <div className="relative w-full h-[400px]">
              <Image
                src="/bpage2.png"
                alt="Exploring Decorating"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 w-full h-[250px] flex flex-col items-start justify-between">
              <div className="flex items-center gap-5 text-base text-gray-400">
                <div className="flex items-center gap-3">
                  <FaUser />
                  <p>Admin</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoCalendarClear />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaTag />
                  <p>Handmade</p>
                </div>
              </div>
              <p className="text-[25px] font-medium mb-2">
                Exploring new ways of decorating
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aut, dignissimos similique cumque omnis expedita nemo
                eius, quo sed, doloribus est sunt! Quod cupiditate optio
                corporis illo necessitatibus, alias impedit?
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-500 font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white flex flex-col items-start justify-between w-[750px] h-[650px] rounded-lg overflow-hidden">
            <div className="relative w-full h-[400px]">
              <Image
                src="/bpage3.png"
                alt="Handmade Pieces"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 w-full h-[250px] flex flex-col items-start justify-between">
              <div className="flex items-center gap-5 text-base text-gray-400">
                <div className="flex items-center gap-3">
                  <FaUser />
                  <p>Admin</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoCalendarClear />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaTag />
                  <p>Handmade</p>
                </div>
              </div>
              <p className="text-[25px] font-medium mb-2">
                Handmade pieces that took time to make
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aut, dignissimos similique cumque omnis expedita nemo
                eius, quo sed, doloribus est sunt! Quod cupiditate optio
                corporis illo necessitatibus, alias impedit?
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-500 font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 gap-20">
          {/* Categories */}
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
              <p className="text-2xl font-medium mb-10">Categories</p>
            </div>
            <div className="space-y-2 font-normal text-base text-gray-400 flex flex-col items-start gap-10">
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

          {/* Recent Posts */}
          <div className="flex flex-col items-start ">
            <div>
              <p className="text-2xl font-medium mb-10">Recent Posts</p>
            </div>
            <div className="w-[250px] flex flex-col items-start justify-center gap-5">
              <div className="flex flex-col gap-5">
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
      {/* Pagination */}
      <div className="flex justify-center pb-20 mt-10 gap-8">
        <button className="px-4 py-2 w-[60px] h-[60px] bg-yellow-200 rounded-lg">
          1
        </button>
        <button className="px-4 py-2 w-[60px] h-[60px] bg-yellow-100 rounded-lg">
          2
        </button>
        <button className="px-4 py-2 w-[60px] h-[60px] bg-yellow-100 rounded-lg">
          3
        </button>
        <button className="px-4 py-2 w-[90px] h-[60px] bg-yellow-100 rounded-lg">
          Next
        </button>
      </div>
      <div>
        <ShopInfo />
      </div>
    </div>
  );
};

export default page;
