import React from "react";
import Image from "next/image";
import Hero from "./hero";
import ProductCard from "./productCard";
import BlogCard from "./blogCard";
import Header from "./header";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Header bgcolor={"#FBEB◘B5"} />
      </div>
      <div>
        <Hero />
      </div>

      <div className=" w-full lg:h-[600px] md:h-[100vh] xs:min-h-[100vh] md:gap-0 xs:gap-20 flex items-center md:flex-nowrap xs:flex-wrap lg:pb-0 md:pb-10 xs:pb-20 md:pt-0 xs:pt-5 lg:justify-around md:justify-between xs:justify-center md:pr-12 xs:pr-7 bg-[#FAF4F4]">
        <div className="flex flex-col lg:w-[550px] lg:h-[550px] md:w-[340px] md:h-[340px] xs:w-[250px] xs:h-[250px] items-center justify-start">
          <div>
            <Image
              src={"/table.png"}
              alt="table"
              height={400}
              width={400}
            ></Image>
          </div>
          <div className="font-medium flex flex-col lg:gap-6 md:gap-4 xs:gap-2">
            <p className="lg:text-4xl md:text-2xl xs:text-2xl">Side Table</p>
            <button className="lg:w-[125px] md:w-max xs:w-max lg:h-[49px] md:h-[39px] lg:text-2xl md:text-lg xs:text-base border-black border-b-2">
              View More
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center   lg:w-[550px] lg:h-[550px] md:w-[340px] md:h-[340px] xs:w-[250px] xs:h-[250px] ">
          <div>
            <Image
              src={"/sofa.png"}
              alt="table"
              height={400}
              width={400}
            ></Image>
          </div>
          <div className="font-medium flex flex-col lg:gap-6 md:gap-4 xs:gap-2">
            <p className="lg:text-4xl md:text-2xl xs:text-2xl">Side Sofa</p>
            <button className="lg:w-[125px] md:w-max xs:w-max lg:h-[49px] md:h-[39px] lg:text-2xl md:text-lg xs:text-base border-black border-b-2">
              View More
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-around xs:py-10 w-full lg:h-[750px] xs:min-h-[150vh] bg-white">
        <div className="flex flex-col items-center font-medium lg:gap-5 xs:gap-3">
          <p className=" lg:text-4xl xs:text-3xl">Top Picks For You</p>
          <p className=" lg:text-base xs:text-sm xs:text-center text-[#9f9f9f]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>

        <div className="lg:flex lg:flex-nowrap xs:grid xs:grid-cols-1 md:grid-cols-2 md:space-x-14 items-center justify-around gap-5">
          <ProductCard
            imageUrl="/pick1.png"
            price="RS. 25,000"
            title="Trenton modular sofa with pillow"
          />
          <ProductCard
            imageUrl="/pick2.png"
            price="RS. 25,000"
            title="Granite dining table with dining chair"
          />
          <ProductCard
            imageUrl="/pick3.png"
            price="RS. 25,000"
            title="Outdoor bar minimal table and stool"
          />
          <ProductCard
            imageUrl="/pick4.png"
            price="RS. 25,000"
            title="Plain wooden console with teak mirror"
          />
        </div>

        <div>
          <button className=" lg:w-[115px] md:w-max xs:w-max lg:h-[45px] md:h-[35px] xs:h-[30px] border-black border-b-2 font-medium text-center md:mt-16 lg:text-xl md:text-base xs:mt-10">
            View More
          </button>
        </div>
      </div>

      <div className="w-full lg:h-[550px] md:h-[80vh] xs:h-[90vh] md:pb-0 xs:pb-5 flex md:flex-row xs:flex-col items-center md:justify-between xs:justify-around bg-[#FFF9E5]">
        <div className="lg:w-[65vw] md:w-[55vw] xs:w-[105vw]">
          <Image
            src={"/asgaardsofa.png"}
            alt="assgardsofa"
            width={800}
            height={0}
          ></Image>
        </div>
        <div className=" flex flex-col items-center justify-between md:mr-10 text-center md:gap-10 xs:gap-6">
          <div>
            <p className=" font-medium lg:text-2xl md:text-xl xs:text-lg">
              New Arrivals
            </p>
            <p className=" font-bold lg:text-5xl md:text-4xl xs:text-3xl">
              Asgaard Sofa
            </p>
          </div>
          <div>
            <button className=" font-normal lg:text-xl xs:text-lg border-[1px] lg:py-2 xs:py-1 lg:px-8 md:px-6 xs:px-5 border-black">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-around w-full lg:py-0 xs:py-10 lg:h-[850px] xs:min-h-[100vh] bg-slate-100">
        <div className="flex flex-col items-center font-medium lg:gap-5 xs:gap-3">
          <p className=" lg:text-4xl xs:text-3xl">Our Blogs</p>
          <p className=" lg:text-base xs:text-sm text-center text-[#9f9f9f]">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>

        <div className="lg:flex xs:grid md:grid-cols-2 xs:grid-cols-1 md:space-y-0 xs:space-y-20 md:gap-12 xs:gap-10 lg:items-center lg:justify-around lg:gap-5 lg:mt-0 xs:mt-10">
          <BlogCard
            imageUrl={"/blog1.png"}
            title={"Going all-in with millennial design"}
          />
          <BlogCard
            imageUrl={"/blog2.png"}
            title={"Going all-in with millennial design"}
          />
          <BlogCard
            imageUrl={"/blog3.png"}
            title={"Going all-in with millennial design"}
          />
        </div>

        <div className="text-center md:mt-0 xs:mt-24">
          <Link href={"/blogs"}>
            <p className=" lg:w-[150px] md:w-max lg:h-[49px] md:h-[39px] border-black border-b-2 font-medium text-center lg:text-xl xs:text-lg">
              View All Posts
            </p>
          </Link>
        </div>
      </div>

      <div
        className=" w-full lg:h-[395px] md:h-[300px] xs:h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url("instabg.png")` }}
      >
        <div className="flex flex-col items-center justify-between gap-5">
          <div className=" flex flex-col items-center gap-5">
            <p className="font-bold lg:text-6xl md:text-5xl xs:text-4xl">
              Our Instagram
            </p>
            <p className="font-normal lg:text-xl md:text-lg xs:text-lg">
              Follow Our Store On Instagram
            </p>
          </div>
          <div>
            <button className=" lg:w-[250px] md:w-[200px] xs:w-[150px] lg:h-[60px] md:h-[50px] xs:h-[40px] bg-[#FAF4F4] rounded-full drop-shadow-2xl">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
