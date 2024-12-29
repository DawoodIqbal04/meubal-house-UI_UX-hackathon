import React from "react";
import Header from "../components/header";
import ShopPage from "../components/ShopPage";
import ShopInfo from "../components/ShopInfo";

const page = () => {
  return (
    <div>
      <Header bgcolor={"white"} />
      <ShopPage />
      <ShopInfo />
    </div>
  );
};

export default page;
