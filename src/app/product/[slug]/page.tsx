import React from "react";
import Link from "next/link";
import ProductCard from "../../components/productCard";
import { notFound } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Header from "@/app/components/header";
import SingleProductBottom from "@/app/components/SingleProductBottom";
import { client } from "@/sanity/lib/client";
import { Products } from "@/app/components/interface";
import ImageGallery from "@/app/components/ImageGallery";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]{
  _id,
    price,
    name,
    image,
    description,
    "slug": slug.current,
    "category": category->name
}`;

  const product = await client.fetch(query);

  return product;
}

const SingleProductPage = async ({ params }: { params: { slug: string } }) => {
  const product: Products = await getData(params.slug);

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
          <ImageGallery image={product.image} />
        </div>

        <div className="lg:w-2/5 md:w-[35%] md:mt-0 xs:mt-10 flex flex-col items-start gap-[10px]">
          <div>
            <p className="lg:text-[42px] md:text-[35px] xs:text-[25px] font-medium">
              {product.name}
            </p>
          </div>
          <div>
            <p className="lg:text-xl md:text-lg font-bold text-gray-600">
              RS. {product.price}
            </p>
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
            <p className="text-xl font-medium">Product Description</p>
            <p className="text-gray-700">{product.description}</p>
          </div>
          <div>
            <p className="text-xl font-medium">Category</p>
            <p className="text-gray-700">{product.category}</p>
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

          <div className="text-gray-500 space-y-1 lg:mt-10 md:mt-10 text-base font-normal border-t w-[100%] pt-5 border-black">
            <p className="flex items-center gap-3">
              <span>SKU</span>: SS001
            </p>
            <p className="flex items-center gap-3">
              <span>Tags</span>: Sofa, Chair, Home, Shop
            </p>
            <p className="flex items-center gap-3">
              <span>Share</span>:
              <div className="flex items-center gap-2 text-black">
                <Link
                  className="hover:opacity-75"
                  href={
                    "https://www.linkedin.com/in/muhammad-dawood-bb469b29a/?originalSubdomain=pk"
                  }
                >
                  <FaLinkedin />
                </Link>
                <Link
                  className="hover:opacity-75"
                  href={
                    "https://www.facebook.com/people/Dawood-Al-Zadjali/pfbid02GVr5KZf5u8DTYWojbF627XZ6hUFD1chaTajYozNPZHeQLaQH4ebikxw2edYigFMGl/"
                  }
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="hover:opacity-75"
                  href={"https://github.com/DawoodIqbal04"}
                >
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
          <p className=" lg:text-4xl md:text-3xl xs:text-2xl">
            Related Products
          </p>
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
