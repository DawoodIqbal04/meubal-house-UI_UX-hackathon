import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full lg:h-[555px] md:h-[100vh] xs:h-[70vh] overflow-x-hidden overflow-y-hidden bg-white flex lg:px-[15px] lg:pt-[100px] md:pt-10 justify-center ">
      <div className=" flex flex-col items-center justify-between lg:pb-0 md:pb-8 xs:pb-4  lg:h-[419px] md:h-[100vh] xs:h-[70vh] md:w-[90%] xs:w-[90%]">
        <div className="flex justify-between h-[312px] w-[100%] ">
          <div className="lg:flex xs:hidden flex-col lg:gap-10 md:gap-8 xs:gap-4 justify-center lg:text-base md:text-sm font-normal text-[#9F9F9F]">
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
          <div className="flex items-start justify-between w-[700px] font-medium lg:text-base xs:text-sm">
            <div className="flex flex-col lg:gap-12 md:gap-8 xs:gap-4">
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
            <div className="flex flex-col lg:gap-12 md:gap-8 xs:gap-4">
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
            <div className="flex flex-col md:gap-12 xs:gap-8">
              <div className=" text-[#9f9f9f]">Newsletter</div>
              <div className="flex md:flex-row xs:flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter Your Email Adress"
                  className=" border-b-[1.5px] border-black bg-transparent outline-none md:text-base xs:text-sm font-normal"
                />
                <button
                  type="submit"
                  className=" border-b-[1.5px] border-black "
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden md:flex items-start -mt-24  lg:gap-10 md:gap-8 justify-start lg:text-base md:text-sm xs:text-sm font-normal text-[#9F9F9F]">
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
        <div className=" flex lg:items-end md:items-center xs:items-center lg:h-[59px] md:h-[69px] xs:h-[30px] w-full border-t-[1px] font-normal md:text-base xs:text-sm border-[#9f9f9f]">
          <p>© 2024 Meubel House. All rights reverved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
