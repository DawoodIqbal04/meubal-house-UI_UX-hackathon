"use client";

import React from "react";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { Minus, Plus } from "lucide-react";

const CartModel = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
    incrementItem,
    decrementItem,
  } = useShoppingCart();

  async function handleCheckoutClick(event: { preventDefault: () => void }) {
    event.preventDefault();
    try {
      const response = await redirectToCheckout();
      if (response?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center h-full justify-between">
          <div className="flex-1 mt-8 overflow-y-auto ">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="text-lg py-6">
                  You havenot any items in your cart
                </h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((product) => (
                    <li
                      key={product.id}
                      className="py-6 flex items-start justify-between"
                    >
                      <div className="h-24 w-24 flex overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={product.image as string}
                          alt="Product image"
                          width={200}
                          height={200}
                        />
                      </div>

                      <div className="flex ml-4 flex-1 flex-col">
                        <div>
                          <div className="flex justify-between font-medium text-gray-900">
                            <h3>{product.name}</h3>
                            <p className="ml-4 text-gray-800">
                              RS{product.price}
                            </p>
                          </div>
                          <p className="mt-1 text-sm line-clamp-2 text-gray-500">
                            {product.description}
                          </p>
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <p>Qty: {product.quantity}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="text-white hover:bg-gray-400 bg-gray-500 rounded-full"
                              onClick={() => incrementItem(product.id)}
                            >
                              <Plus size={16} />
                            </button>
                            <button
                              type="button"
                              className="text-blue-700 hover:text-blue-500"
                              onClick={() => removeItem(product.id)}
                            >
                              <MdCancel size={20} />
                            </button>
                            <button
                              type="button"
                              className="text-white hover:bg-gray-400 bg-gray-500 rounded-full"
                              onClick={() => decrementItem(product.id)}
                            >
                              <Minus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div>
            {cartCount === 0 ? (
              <div className="pb-10">
                <button
                  onClick={() => handleCartClick()}
                  className="w-full mt-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 rounded-md"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div>
                <div className="border-t border-gray-200 px-4 py-6 xs:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal:</p>
                    <p>RS{totalPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Shipping and Taxes Calculated at Checkout
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={handleCheckoutClick}
                      className="w-full mt-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 rounded-md"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartModel;
