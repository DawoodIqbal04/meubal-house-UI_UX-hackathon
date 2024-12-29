import React from "react";
import Link from "next/link";
import Image from "next/image";

const ShopProducts = () => {
  const products: {
    id: number;
    imageUrl: string;
    title: string;
    price: string;
    description: string;
  }[] = [
    {
      id: 1,
      imageUrl: "/pick1.png",
      title: "Trenton Modular Sofa",
      price: "RS. 250000",
      description:
        "A versatile and stylish modular sofa for any living space. Perfect for large families or those who love to entertain guests.",
    },
    {
      id: 2,
      imageUrl: "/pick2.png",
      title: "Graninte Dining Table With Chairs",
      price: "RS. 300000",
      description:
        "Elegant dining set with a granite table and comfortable chairs. Ideal for hosting dinner parties and family gatherings.",
    },
    {
      id: 3,
      imageUrl: "/pick3.png",
      title: "Outdoor Bar Table And Stool",
      price: "RS. 200000",
      description:
        "Perfect for outdoor gatherings, this bar table set is a must-have. Enjoy your drinks and snacks in style with this durable set.",
    },
    {
      id: 4,
      imageUrl: "/pick4.png",
      title: "Plain Console With Teak Mirror",
      price: "RS. 150000",
      description:
        "A minimalist console paired with a beautiful teak mirror. Adds a touch of elegance to any hallway or living room.",
    },
    {
      id: 5,
      imageUrl: "/pro1.png",
      title: "Grain Coffee Table",
      price: "RS. 100000",
      description:
        "A stylish coffee table with a unique grain pattern. Perfect for adding a rustic charm to your living space.",
    },
    {
      id: 6,
      imageUrl: "/pro2.png",
      title: "Kent Coffee Table",
      price: "RS. 120000",
      description:
        "A modern coffee table that complements any living room. Its sleek design makes it a perfect centerpiece.",
    },
    {
      id: 7,
      imageUrl: "/pro3.png",
      title: "Rounded Coffee Table",
      price: "RS. 110000",
      description:
        "A round coffee table that adds a touch of elegance. Ideal for both modern and traditional interiors.",
    },
    {
      id: 8,
      imageUrl: "/pro4.png",
      title: "Reclaimed Teak Coffee Table",
      price: "RS. 130000",
      description:
        "Eco-friendly coffee table made from reclaimed teak wood. A sustainable choice for environmentally conscious homeowners.",
    },
    {
      id: 9,
      imageUrl: "/pro5.png",
      title: "Minimal Plain Console",
      price: "RS. 140000",
      description:
        "A sleek and minimalistic console for modern interiors. Perfect for displaying decorative items or storing essentials.",
    },
    {
      id: 10,
      imageUrl: "/pro6.png",
      title: "Reclaimed Teak Sideboard",
      price: "RS. 160000",
      description:
        "A sideboard crafted from reclaimed teak, perfect for storage. Combines functionality with eco-friendly design.",
    },
    {
      id: 11,
      imageUrl: "/pro7.png",
      title: "Teak Outdoor Table And Chair",
      price: "RS. 180000",
      description:
        "Durable outdoor table and chair set made from teak wood. Perfect for enjoying meals and gatherings in your garden.",
    },
    {
      id: 12,
      imageUrl: "/pro8.png",
      title: "Bella Table And Chair",
      price: "RS. 190000",
      description:
        "Charming table and chair set for a cozy dining experience. Ideal for small kitchens or breakfast nooks.",
    },
    {
      id: 13,
      imageUrl: "/pro9.png",
      title: "Granite Square Side Table",
      price: "RS. 170000",
      description:
        "A sturdy side table with a granite top for added elegance. Perfect for placing beside your sofa or bed.",
    },
    {
      id: 14,
      imageUrl: "/pro10.png",
      title: "Asgaard Sofa Set",
      price: "RS. 210000",
      description:
        "Luxurious sofa set designed for ultimate comfort and style. Perfect for creating a cozy and inviting living room.",
    },
    {
      id: 15,
      imageUrl: "/pro11.png",
      title: "Maya Sofa Three Seater",
      price: "RS. 220000",
      description:
        "A spacious three-seater sofa with a contemporary design. Ideal for modern homes and large living spaces.",
    },
    {
      id: 16,
      imageUrl: "/pro12.png",
      title: "Outdoor Tea Sofa Set",
      price: "RS. 230000",
      description:
        "Perfect for tea time, this outdoor sofa set is both stylish and comfortable. Enjoy your afternoons in the garden with this set.",
    },
  ];

  return (
    <div className="bg-white">
      <div className=" min-h-[300vh] w-full flex items-start justify-center gap-10 px-12 flex-wrap">
        {products.map((product, index) => (
          <Link
            href={`/product/${product.id}`}
            key={index}
            className="flex flex-col items-center justify-between w-[250px] h-[350px] mt-10"
          >
            <div className="flex items-center w-full h-[250px] bg-cover">
              <Image
                src={product.imageUrl}
                alt={product.title}
                height={0}
                width={300}
              ></Image>
            </div>
            <div className="flex flex-col items-start gap-5 w-full h-100px">
              <p className="font-normal text-base">{product.title}</p>
              <p className="font-medium text-2xl">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 my-20">
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-[10px] cursor-pointer bg-[#FBEBB5]">
          <span>1</span>
        </div>
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-[10px] cursor-pointer bg-[#FFF9E5]">
          <span>2</span>
        </div>
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-[10px] cursor-pointer bg-[#FFF9E5]">
          <span>3</span>
        </div>
        <div className="flex items-center justify-center w-[100px] h-[60px] rounded-[10px] cursor-pointer bg-[#FFF9E5]">
          <span>Next</span>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
