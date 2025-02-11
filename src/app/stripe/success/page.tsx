"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useShoppingCart } from "use-shopping-cart";

export default function SuccessPage() {

  const { clearCart } = useShoppingCart();



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <svg
            className="w-24 h-24 text-green-500 animate-checkmark"
            viewBox="0 0 52 52"
          >
            <circle
              className="stroke-current fill-none animate-circle"
              cx="26"
              cy="26"
              r="25"
              strokeWidth="2"
            />
            <path
              className="stroke-current fill-none animate-check"
              strokeWidth="4"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Payment Successful! 🎉
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Thank you for your purchase!.
        </p>
        <p className="text-center text-gray-600 mb-8">
        We’re so grateful for your support—it truly means the world to us. Your order is confirmed, and we’re already working to make sure everything is perfect for you.
        </p>

        <Link href="/shop">
        <motion.button
              onClick={clearCart}
              whileTap={{ scale: 0.95 }}
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Return To Shop
            </motion.button>
        </Link>
      </div>
    </div>
  );
}
