import React from "react";
import Header from "../components/header";
import ShopPage from "../components/ShopPage";
import ShopInfo from "../components/ShopInfo";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header bgcolor={"white"} placeHolder="Search Products" />
      <ShopPage />
      <ShopInfo />
    </div>
  );
};

export default page;
