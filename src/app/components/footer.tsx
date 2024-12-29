import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full h-[555px] bg-white flex px-[15px] pt-[100px] justify-center ">
      <div className=" flex flex-col items-center justify-between  h-[419px] w-[90%]">
        <div className="flex justify-between h-[312px] w-[100%] ">
          <div className="flex flex-col gap-10 justify-center text-base font-normal text-[#9F9F9F]">
            <p>
              400 University Drive Suite 200 Coral
              <br />
              Gables,
              <br />
              FL 33134 USA
            </p>
            <p>www.meubelhouse.com</p>
            <p>bussiness.meubelhouse@gmail.com</p>
          </div>
          <div className="flex items-start justify-between w-[700px] font-medium text-base">
            <div className="flex flex-col gap-12 ">
              <div className=" text-[#9f9f9f]">Links</div>
              <div>
                <Link href={""}>Home</Link>
              </div>
              <div>
                <Link href={""}>Shop</Link>
              </div>
              <div>
                <Link href={""}>Contact</Link>
              </div>
              <div>
                <Link href={""}>About</Link>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className=" text-[#9f9f9f]">Help</div>
              <div>
                <Link href={""}>Payment Options</Link>
              </div>
              <div>
                <Link href={""}>Returns</Link>
              </div>
              <div>
                <Link href={""}>Privacy Policies</Link>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className=" text-[#9f9f9f]">Newsletter</div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter Your Email Adress"
                  className=" border-b-[1.5px] border-black bg-transparent outline-none text-base font-normal"
                />
                <button
                  type="submit"
                  value={"Subscribe"}
                  className=" border-b-[1.5px] border-black "
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-end h-[59px] w-[100%] border-t-[1px] font-normal text-base border-[#9f9f9f]">
          <p>© 2024 Meubel House. All rights reverved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
