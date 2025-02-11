'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function StripeErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div
        className="bg-white shadow-lg flex flex-col items-center justify-center rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 2 }}
          className="text-red-500 mb-4"
        >
          <AlertCircle size={60} />
        </motion.div>
        <h1 className="text-2xl font-bold text-gray-800">Payment Failed</h1>
        <p className="text-gray-600 mt-2">Something went wrong with your transaction.</p>
        <p className="text-gray-600">Please try again or contact support.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/shop">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="block w-full text-center bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Return To Shop
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
