import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/productCard";
import { notFound } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Header from "@/app/components/header";
import SingleProductBottom from "@/app/components/SingleProductBottom";

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
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
interface Params {
  id: string;
}

const SingleProductPage = ({ params }: { params: Params }) => {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="overflow-x-hidden">
      <div>
        <Header bgcolor="white" />
      </div>
      <div className="flex md:flex-row xs:flex-col items-start lg:px-16 md:px-8 xs:px-4 py-10 lg:gap-20 md:gap-10 w-[100%]">
        <div className="flex md:flex-row xs:flex-col-reverse lg:w-1/2 md:w-[55%] xs:w-[100%] gap-4">
          <div className="flex md:flex-col items-start lg:gap-8 md:gap-6 xs:gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-yellow-100 lg:w-[90px] md:w-[60px] xs:w-max lg:h-[90px] md:h-[60px] xs:h-max rounded-lg"
              >
                <Image
                  src={product.imageUrl}
                  alt={`Asgaard Sofa Thumbnail`}
                  className="rounded-lg w-full"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <div className=" lg:h-[500px] md:h-[350px] lg:w-[500px] md:w-[400px] flex justify-center">
            <Image
              src={product.imageUrl}
              alt="Asgaard Sofa"
              className="rounded-xl h-[91%] bg-yellow-100 w-full"
              width={1000}
              height={500}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="lg:w-2/5 md:w-[35%] md:mt-0 xs:mt-10 flex flex-col items-start gap-[10px]">
          <div>
            <p className="lg:text-[42px] md:text-[35px] xs:text-[25px] font-medium">{product.title}</p>
          </div>
          <div>
            <p className="lg:text-xl md:text-lg font-bold text-gray-600">{product.price}</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              |&nbsp;&nbsp;5 Customer Reviews
            </span>
          </div>
          <div>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div>
            <p className="text-lg font-medium">Size</p>
            <div className="flex space-x-2 mt-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <p className="text-lg font-medium">Color</p>
            <div className="flex space-x-2 mt-2">
              {[
                "bg-purple-500",
                "bg-blue-500",
                "bg-yellow-500",
                "bg-black",
              ].map((colorClass, index) => (
                <div
                  key={index}
                  className={`h-8 w-8 rounded-full ${colorClass}`}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-col lg:gap-0 md:gap-7 items-center mt-7 md:pb-0 xs:pb-10 space-x-4">
            <div className="flex items-center border rounded-lg">
              <button className="px-4 py-2">-</button>
              <span className="px-4">1</span>
              <button className="px-4 py-2">+</button>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Add To Cart
            </button>
          </div>

          <div className="text-gray-500 space-y-1 lg:mt-16 md:mt-10 text-base font-normal border-t w-[100%] pt-5 border-black">
            <p className="flex items-center gap-3">
              <span>SKU</span>: SS001
            </p>
            <p className="flex items-center gap-3">
              <span>Category</span>: Sofas
            </p>
            <p className="flex items-center gap-3">
              <span>Tags</span>: Sofa, Chair, Home, Shop
            </p>
            <p className="flex items-center gap-3">
              <span>Share</span>:
              <div className="flex items-center gap-2 text-black">
                <Link
                  href={
                    "https://www.linkedin.com/in/muhammad-dawood-bb469b29a/?originalSubdomain=pk"
                  }
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/people/Dawood-Al-Zadjali/pfbid02GVr5KZf5u8DTYWojbF627XZ6hUFD1chaTajYozNPZHeQLaQH4ebikxw2edYigFMGl/"
                  }
                >
                  <FaFacebook />
                </Link>
                <Link href={"https://github.com/DawoodIqbal04"}>
                  <FaGithub />
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div>
        <SingleProductBottom />
      </div>
      <div className="flex flex-col items-center lg:gap-10  mt-10 w-full lg:h-[750px] md:min-h-[100vh] bg-white">
        <div className="flex flex-col items-center font-medium">
          <p className=" lg:text-4xl md:text-3xl xs:text-2xl">Related Products</p>
        </div>

        <div className="lg:flex xs:grid md:grid-cols-2 xs:grid-cols-1  md:gap-x-28 items-center justify-around lg:gap-5">
          <ProductCard
            imageUrl="/pick1.png"
            price="RS. 25,000"
            title="Trenton modular sofa with pillow"
          />
          <ProductCard
            imageUrl="/pick2.png"
            price="RS. 25,000"
            title="Granite dining table with dining chair"
          />
          <ProductCard
            imageUrl="/pick3.png"
            price="RS. 25,000"
            title="Outdoor bar minimal table and stool"
          />
          <ProductCard
            imageUrl="/pick4.png"
            price="RS. 25,000"
            title="Plain wooden console with teak mirror"
          />
        </div>

        <div className="mt-10 lg:pb-0 md:pb-10 xs:pb-5">
          <button className=" w-[115px] h-[45px] border-black border-b-2 font-medium text-center text-xl">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
