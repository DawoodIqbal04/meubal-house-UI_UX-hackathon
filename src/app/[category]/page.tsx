import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Product } from '../components/interface';
import Header from '../components/header';
import PageToper from '../components/PageToper';

async function getData(category: string) {
    const query = ` *[_type == "product" && category->name == '${category}']{
  _id,
    price,
    name,
    'imageUrl': image[0].asset->url,
    "slug": slug.current,
    'category': category->name
}`;
    const data = await client.fetch(query);
    return data;
}

const CategoryPage = async({ params }: { params: { category: string } }) => {
    const data: Product[] = await getData(params.category);
  return (
    <div>
        <div>
          <Header bgcolor="white" />
        </div>
        <div>
        <PageToper name={
          params.category === 'Livingroom' ? 'Living Room' :
          params.category === 'Bedroom' ? 'Bed Room' :
          params.category === 'Diningroom' ? 'Dining Room' :
          'Outdoor'
        } />
        </div>
        <div className=" w-full flex items-start justify-center mt-10 lg:gap-6 md:gap-x-16 px-12 flex-wrap">
        {data.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            key={product._id}
            className="flex flex-col items-center justify-between lg:w-[270px] md:w-[300px] xs:w-[380px] h-[350px] mt-10"
          >
            <div className="flex items-center w-full h-[250px] product hover:opacity-75">
              <Image
              className="w-full h-[250px] object-cover object-center"
                src={product.imageUrl}
                alt={product.name}
                priority
                height={0}
                width={300}
              ></Image>
            </div>
            <div className="flex flex-col items-start justify-between gap-5 w-full h-100px">
              <p className="font-normal text-base">{product.name}</p>
              <p className="font-medium text-xl">RS.{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage