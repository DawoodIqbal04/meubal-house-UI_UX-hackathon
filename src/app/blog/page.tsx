import Image from "next/image";
import React from "react";
import { FaTag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl flex items-start justify-between mx-auto py-10 px-5">
        <div className="flex flex-col items-start justify-between gap-10">
          {/* Post 1 */}
          <div className="bg-white flex flex-col items-start justify-between w-[750px] h-[650px] shadow-lg rounded-lg overflow-hidden">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aut, dignissimos similique cumque omnis expedita nemo eius, quo sed, doloribus est sunt! Quod cupiditate optio corporis illo necessitatibus, alias impedit?
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-500 font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white flex flex-col items-start justify-between w-[750px] h-[650px] shadow-lg rounded-lg overflow-hidden">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aut, dignissimos similique cumque omnis expedita nemo eius, quo sed, doloribus est sunt! Quod cupiditate optio corporis illo necessitatibus, alias impedit?
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-500 font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white flex flex-col items-start justify-between w-[750px] h-[650px] shadow-lg rounded-lg overflow-hidden">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aut, dignissimos similique cumque omnis expedita nemo eius, quo sed, doloribus est sunt! Quod cupiditate optio corporis illo necessitatibus, alias impedit?
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
            <p className="text-2xl font-medium mb-10">Categories</p>
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
          <div className="w-[250px]">
            <p className="text-2xl font-medium mb-10">Recent Posts</p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="relative w-20 h-16">
                  <Image
                    src=""
                    alt="Recent Post"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-700 text-sm font-normal">
                    Going all-in with millennial design
                  </p>
                  <p className="text-xs font-normal text-gray-400">Oct 12, 2023</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="relative w-20 h-16">
                  <Image
                    src=""
                    alt="Recent Post"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-700 text-sm font-normal">
                    Exploring new ways of decorating
                  </p>
                  <p className="text-xs font-normal text-gray-400">Nov 14, 2023</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="relative w-20 h-16">
                  <Image
                    src=""
                    alt="Recent Post"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-700 text-sm font-normal">
                    Handmade pieces that took time to make
                  </p>
                  <p className="text-xs font-normal text-gray-400">Dec 10, 2023</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded">1</button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            2
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded">3</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Next</button>
        </div>
    </div>
  );
};

export default page;
