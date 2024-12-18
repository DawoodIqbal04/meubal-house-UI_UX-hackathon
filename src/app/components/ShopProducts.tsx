import React from 'react'
import ProductCard from './productCard'

const ShopProducts = () => {
  return (
  <div className='bg-white'>

    <div className=' min-h-[300vh] w-full flex items-start justify-center gap-10 px-12 flex-wrap'>
      <ProductCard imageUrl="/pick1.png" title="Trenton Modular Sofa" price="RS. 250000" />
      <ProductCard imageUrl="/pick2.png" title="Graninte Dining Table With Chairs" price="RS. 250000" />
      <ProductCard imageUrl="/pick3.png" title="Outdoor Bar Table And Stool" price="RS. 250000" />
      <ProductCard imageUrl="/pick4.png" title="Plain Console With Teak Mirror" price="RS. 250000" />
      <ProductCard imageUrl="/pro1.png" title="Grain Coffee Table" price="RS. 250000" />
      <ProductCard imageUrl="/pro2.png" title="Kent Coffee Table" price="RS. 250000" />
      <ProductCard imageUrl="/pro3.png" title="Rounded Coffee Table" price="RS. 250000" />
      <ProductCard imageUrl="/pro4.png" title="Reclaimed Teak Coffee Table" price="RS. 250000" />
      <ProductCard imageUrl="/pro5.png" title="Minimal Plain Console" price="RS. 250000" />
      <ProductCard imageUrl="/pro6.png" title="Reclaimed Teak Sideboard" price="RS. 250000" />
      <ProductCard imageUrl="/pro7.png" title="Teak Outdoor Table And Chair" price="RS. 250000" />
      <ProductCard imageUrl="/pro8.png" title="Bella Table And Chair" price="RS. 250000" />
      <ProductCard imageUrl="/pro9.png" title="Granite Square Side Table" price="RS. 250000" />
      <ProductCard imageUrl="/pro10.png" title="Asgaard Sofa Set" price="RS. 250000" />
      <ProductCard imageUrl="/pro11.png" title="Maya Sofa Three Seater" price="RS. 250000" />
      <ProductCard imageUrl="/pro12.png" title="Outdoor Tea Sofa Set" price="RS. 250000" />
    </div>
    <div className='flex items-center justify-center gap-5 my-20'>
      <div className='flex items-center justify-center w-[60px] h-[60px] rounded-[10px] cursor-pointer bg-[#FBEBB5]'><span>1</span></div>
      <div className='flex items-center justify-center w-[60px] h-[60px] rounded-[10px] cursor-pointer bg-[#FFF9E5]'><span>2</span></div>
      <div className='flex items-center justify-center w-[60px] h-[60px] rounded-[10px] cursor-pointer bg-[#FFF9E5]'><span>3</span></div>
      <div className='flex items-center justify-center w-[100px] h-[60px] rounded-[10px] cursor-pointer bg-[#FFF9E5]'><span>Next</span></div>
    </div>
  </div>
  )
}

export default ShopProducts