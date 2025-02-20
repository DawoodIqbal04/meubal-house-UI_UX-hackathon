import React from "react";
import Header from "../components/header";
import ShopPage from "../components/ShopPage";
import ShopInfo from "../components/ShopInfo";
import ShopProducts from "../components/ShopProducts";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Header bgcolor="white" />
      </div>
      <div>
        <ShopPage />
      </div>
      <div>
        <ShopProducts />
      </div>
      <div>
        <ShopInfo />
      </div>
    </div>
  );
};

export default page;
