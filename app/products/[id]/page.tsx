import getSingleProducts from '@/apis/singleproduct.api'
import { ProductInterface } from '@/interfaces/product.interface'
import React from 'react'
import Image from 'next/image'

export default async function page({params}:{params:{id:string}}) {
  const {id} = params
  const data:ProductInterface = await getSingleProducts(id)
  return (

   <div className='flex flex-wrap items-center py-10'>
        <div className=" w-full md:w-1/3">
         <Image src={data.imageCover} alt='' width={300} height={300} className='object-cover w-full'/>
        </div>
        <div className=" w-full md:w-2/3 p-5">
          <h3>{data.title}</h3>
          <p className='text-gray-400 my-3'>{data.description}</p>
          <p>{data.category.name}</p>
          <div className='flex justify-between my-5 items-center'>
          <span>{data.price}EGP</span>
          <span>{data.ratingsAverage} <i className='fa-solid fa-star text-rating'></i></span>
         </div>
         <button className='bg-main rounded-2xl py-2 w-full text-white'>Add To Cart</button>
        </div>
   </div>
  )
}
