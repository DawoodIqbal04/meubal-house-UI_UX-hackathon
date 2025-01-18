import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full lg:h-[555px] md:h-[100vh] xs:h-[75vh] overflow-x-hidden overflow-y-hidden bg-white flex lg:px-[15px] lg:pt-[100px] xs:pt-10 justify-center ">
      <div className=" flex flex-col items-center justify-between lg:pb-0 md:pb-8 xs:pb-4  lg:h-[419px] md:h-[100vh] xs:h-[70vh] md:w-[90%] xs:w-[90%]">
        <div className="flex justify-between h-[312px] w-[100%] ">
          <div className="lg:flex xs:hidden flex-col gap-10 justify-center text-base font-normal text-[#9F9F9F]">
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
          <div className="md:flex items-start justify-between xs:grid xs:grid-cols-2 w-[700px] font-medium lg:text-base xs:text-sm">
            <div className="flex flex-col lg:gap-12 md:gap-8 xs:gap-4">
              <div className=" text-[#9f9f9f]">Links</div>
              <div>
                <Link href={"/"}>Home</Link>
              </div>
              <div>
                <Link href={"/shop"}>Shop</Link>
              </div>
              <div>
                <Link href={"/contact"}>Contact</Link>
              </div>
              <div>
                <Link href={"/about"}>About</Link>
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
              <div className="flex xs:flex-row  gap-3">
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
        <div className="lg:hidden xs:flex md:flex-row xs:flex-col items-start xs:-ml-24 md:-ml-0 xs:-mt-10 md:-mt-20 md:gap-8 xs:gap-2 md:text-sm xs:text-sm font-normal text-[#9F9F9F]">
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
        <div className=" flex xs:flex-col md:items-start xs:items-start md:h-[69px] xs:h-[50px] w-full border-t-[1px] xs:justify-center font-normal md:text-base xs:text-xs border-[#9f9f9f]">
          <p>Developed With ❤ By MUHAMMAD DAWOOD IQBAL</p>
          <p>Meubal House © All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
