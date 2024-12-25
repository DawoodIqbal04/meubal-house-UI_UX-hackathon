import React from "react";
import Image from "next/image";
import ShopInfo from "../components/ShopInfo";
import Header from "../components/header";

const page = () => {
  return (
    <div>
      <Header bgcolor="white" />
      <div
        style={{ backgroundImage: `url("/shopbg.png")` }}
        className=" w-full h-[315px] flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <Image src={"/Logo.png"} alt="Logo" width={77} height={77}></Image>
          </div>
          <div className=" text-5xl font-medium">
            <p>About</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About Us
          </p>
          <p className="mt-4 text-lg leading-6 text-center text-gray-600">
            Welcome to our furniture store, where comfort meets style. <br />We are
            passionate about creating spaces <br />that inspire and feel like home.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-semibold text-gray-900">Our Mission</p>
            <p className="mt-4 text-gray-600">
              To provide high-quality furniture that combines functionality,
              elegance, and durability at an affordable price.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-semibold text-gray-900">Our Values</p>
            <p className="mt-4 text-gray-600">
              Sustainability, craftsmanship, and exceptional customer service
              are at the heart of what we do.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-semibold text-gray-900">Our Story</p>
            <p className="mt-4 text-gray-600">
              From a small workshop to a trusted brand, our journey has been
              driven by a love for beautiful furniture and happy customers.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-2xl font-bold text-gray-900">Why Choose Us?</p>
          <ul className="mt-6 list-disc list-inside text-gray-600">
            <li>Wide variety of stylish and modern furniture.</li>
            <li>Commitment to quality and sustainability.</li>
            <li>Friendly and professional customer support.</li>
            <li>Fast and reliable delivery services.</li>
          </ul>
        </div>
      </div>
    </div>
    <ShopInfo />
    </div>
  );
};

export default page;