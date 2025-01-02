import React from "react";
import Header from "../components/header";
import PageToper from "../components/PageToper";

const page = () => {
  return (
    <div className=" overflow-x-hidden">
      <div>
        <Header bgcolor="white" />
      </div>
      <div>
        <PageToper name="Checkout" />
      </div>
      <div className="min-h-screen flex items-center justify-around pt-10 px-10 bg-white">
        <div className="w-full flex md:flex-row xs:flex-col md:items-start xs:items-center justify-around  bg-white rounded-md p-8 md:flex">
          <div className="md:w-2/5 xs:w-[140%]">
            <p className="md:text-xl xs:text-2xl font-bold mb-6">Billing details</p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-3 text-base font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block mb-3 text-base font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-3 text-base font-medium text-gray-700">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block mb-3 text-base font-medium text-gray-700">
                  Country / Region
                </label>
                <select className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500">
                  <option>Sri Lanka</option>
                  <option>Pakistan</option>
                  <option>USA</option>
                  <option>Bangladesh</option>
                  <option>Gremany</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 text-base font-medium text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-3 text-base font-medium text-gray-700">
                    Town / City
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block mb-3 text-base font-medium text-gray-700">
                    Province
                  </label>
                  <select className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500">
                    <option>Western Province</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-3 text-base font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block mb-3 text-base font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-3 text-base font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block mb-3 text-base font-medium text-gray-700">
                  Additional Information
                </label>
                <textarea
                  className="w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                  rows={3}
                ></textarea>
              </div>
            </form>
          </div>

          <div className="md:w-2/5 xs:w-[140%] mt-20 md:mt-0 md:ml-8">
            <p className="md:text-xl xs:text-2xl font-bold mb-6">Product</p>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">
                  Asgaard Sofa x <span>1</span>
                </span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-normal">
                <span>Subtotal</span>
                <span className="text-base font-normal text-black">
                  Rs. 250,000.00
                </span>
              </div>
              <div className="flex justify-between font-normal">
                <span>Total</span>
                <span className="text-lg font-semibold text-yellow-500">
                  Rs. 250,000.00
                </span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-gray-600 border-t">
              <p className="text-lg font-medium">Payment Method</p>
              <div className="mt-4 space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="text-yellow-500 outline-none focus:ring-yellow-500"
                  />
                  <span className="ml-2">Direct Bank Transfer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="text-yellow-500 outline-none focus:ring-yellow-500"
                  />
                  <span className="ml-2">Cash on Delivery</span>
                </label>
              </div>
              <p className="mt-4 text-base text-gray-500">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a
                  href=""
                  className="font-medium text-indigo-500 hover:underline"
                >
                  privacy policy
                </a>
                .
              </p>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-white text-black border border-gray-700 py-3 transition rounded-md hover:bg-yellow-400 hover:border-none"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
