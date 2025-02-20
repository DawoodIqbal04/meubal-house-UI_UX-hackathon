import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = (props: {
  imageUrl: string | StaticImport;
  title: string;
  price: string | number;
}) => {
  return (
    <Link
      href={""}
      className="flex flex-col items-center justify-between w-[250px] h-[350px] mt-10"
    >
      <div className="flex items-center w-full h-[250px] bg-cover bg-yellow-100 product">
        <Image
          src={props.imageUrl}
          alt={props.title}
          height={0}
          width={300}
        ></Image>
      </div>
      <div className="flex flex-col items-start gap-5 w-full h-100px">
        <p className="font-normal text-base">{props.title}</p>
        <p className="font-medium text-2xl">{props.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
