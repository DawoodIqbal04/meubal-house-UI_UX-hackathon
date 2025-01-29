import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Product } from "./interface";

export async function getData() {
  const query = `*[_type == "product"][0...20] {
  _id,
    price,
    name,
    "imageUrl": image[0].asset->url,
    "slug": slug.current,
    "category": category->name
}`;

  const data = await client.fetch(query);
  return data;
}

const ShopProducts = async () => {
  const products: Product[] = await getData();

  return (
    <div className="bg-white overflow-x-hidden">
      <div className=" min-h-[300vh] w-full flex items-start justify-center lg:gap-6 md:gap-x-16 px-12 flex-wrap">
        {products.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            key={product._id}
            className="flex flex-col items-center justify-between lg:w-[270px] md:w-[300px] xs:w-[380px] h-[350px] mt-10"
          >
            <div className="flex items-center w-full h-[250px] product hover:opacity-75">
              <Image
                className="w-full h-[250px] rounded-lg object-cover object-center"
                src={product.imageUrl}
                alt={product.name}
                priority
                height={0}
                width={300}
              ></Image>
            </div>
            <div className="flex flex-col items-start justify-between gap-5 w-full h-100px">
              <p className="font-normal text-base">{product.name}</p>
              <div className="flex items-center gap-16">
                <p className="font-medium text-xl">RS.{product.price}</p>
                <p className="font-medium text-base text-yellow-500">
                  {product.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 my-20">
        <div className="flex items-center justify-center md:w-[60px] xs:w-[40px] md:h-[60px] xs:h-[40px] rounded-[10px] cursor-pointer bg-[#FBEBB5]">
          <span>1</span>
        </div>
        <div className="flex items-center justify-center md:w-[60px] xs:w-[40px] md:h-[60px] xs:h-[40px] rounded-[10px] cursor-pointer bg-[#FFF9E5]">
          <span>2</span>
        </div>
        <div className="flex items-center justify-center md:w-[60px] xs:w-[40px] md:h-[60px] xs:h-[40px] rounded-[10px] cursor-pointer bg-[#FFF9E5]">
          <span>3</span>
        </div>
        <div className="flex items-center justify-center md:w-[100px] xs:w-[70px] md:h-[60px] xs:h-[40px] rounded-[10px] cursor-pointer bg-[#FFF9E5]">
          <span>Next</span>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
