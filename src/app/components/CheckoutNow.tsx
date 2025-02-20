"use client";

import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { productCart } from "./AddToCart";
import { urlFor } from "@/sanity/lib/image";
import { useUser, SignInButton } from "@clerk/nextjs"; // Import Clerk

const CheckoutNow = ({
  name,
  price,
  description,
  image,
  currency,
  stock,
  price_id,
}: productCart) => {
  const { checkoutSingleItem } = useShoppingCart();
  const { isSignedIn } = useUser(); // Check if user is signed in

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    price: price,
    description: description,
    image: urlFor(image).url(),
    currency: currency,
    stock: stock,
    price_id: price_id,
  };

  return (
    <div>
      {isSignedIn ? (
        <button
          onClick={() => buyNow(product.price_id)}
          className={`px-6 py-2 text-black hover:text-white rounded-lg ${
            product.stock === 0
              ? "bg-gray-500 text-white hover:bg-gray-500 pointer-events-none"
              : "bg-gray-300 hover:bg-gray-400"
          } transition-all `}
        >
          Checkout Now
        </button>
      ) : (
        <SignInButton>
          <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all">
            Sign in to Checkout
          </button>
        </SignInButton>
      )}
    </div>
  );
};

export default CheckoutNow;
