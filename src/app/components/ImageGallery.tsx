'use client';

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React, { useState } from 'react'

interface ImageGalleryProps {
    image: string[];
}
const ImageGallery = ({image}:ImageGalleryProps) => {

    const [bigImage, setBigImage] = useState(image[0])

    const handleImageChange = (image: string) => {
        setBigImage(image);
    }
  return (
    <div className='flex flex-col md:flex-row items-start lg:gap-8 md:gap-6 xs:gap-4'>
        <div className="flex md:flex-col items-start lg:gap-8 md:gap-6 xs:gap-4">
            {image.map((image, index) => (
              <div
                key={index}
                className="bg-gray-100 lg:w-[90px] cursor-pointer md:w-[60px] xs:w-max flex  object-cover object-center lg:h-[90px] md:h-[60px] xs:h-max rounded-lg hover:opacity-75"
              >
                <Image
                  src={urlFor(image).url()}
                  alt={'Side Image'}
                  className=" rounded-lg"
                  width={500}
                  height={500}
                  onClick={() => handleImageChange(image)}
                />
              </div>
            ))}
          </div>
          <div className=" lg:h-[500px] md:h-[350px] lg:w-[500px] md:w-[400px] flex justify-center">
            <Image
              src={urlFor(bigImage).url()}
              alt="Asgaard Sofa"
              className="rounded-xl h-[91%] bg-gray-100 w-full"
              width={1000}
              height={500}
              objectFit="cover"
            />
          </div>
    </div>
  )
}

export default ImageGallery