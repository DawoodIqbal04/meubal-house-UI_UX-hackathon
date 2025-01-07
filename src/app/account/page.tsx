import React from "react";
import Header from "../components/header";
import ShopInfo from "../components/ShopInfo";
import PageToper from "../components/PageToper";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Header bgcolor="white" />
      </div>
      <div>
        <PageToper name="My Account" />
      </div>
      <div className="w-full min-h-[100vh] bg-white">
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-4xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <p className="text-xl font-semibold mb-6">Log In</p>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="login-email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username or email address
                  </label>
                  <input
                    type="text"
                    id="login-email"
                    placeholder="anyone123@gmail.com"
                    className="mt-1 block md:w-4/5 xs:w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="login-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    placeholder="*******"
                    className="mt-1 block md:w-4/5 xs:w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 focus:outline-none border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className=" transition-all w-4/5 bg-white text-indigo-500 border-gray-300 border py-2 rounded-md text-sm font-medium hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log In
                </button>
                <a
                  href="#"
                  className="text-sm w-max text-indigo-500 mt-4 block hover:underline"
                >
                  Lost Your Password?
                </a>
              </form>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-semibold mb-6">Register</p>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="register-email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    placeholder="anyone123@gmail.com"
                    className="mt-1 block md:w-4/5 xs:w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  A link to set a new password will be sent to your email
                  address.
                </p>
                <button
                  type="submit"
                  className=" transition-all w-4/5 bg-white text-indigo-500 border border-gray-300 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#" className="text-indigo-500 hover:underline">
                  privacy policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ShopInfo />
    </div>
  );
};

export default page;
