'use client';

import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const CartProviders = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://meubal-house.vercel.app//stripe/success"
      cancelUrl="http://meubal-house.vercel.app//stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
};

export default CartProviders;
