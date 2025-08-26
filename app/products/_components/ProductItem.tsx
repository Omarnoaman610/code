import { Button } from '@/components/ui/button'
import { ProductInterface } from '@/interfaces/product.interface'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductItem({prod}:{prod:ProductInterface}) {
  return (
    
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6'>
      <div className='p-5'>
       <Link href={`/products/${prod._id}`} >
         <Image width={300} height={300} src={prod.imageCover} className='w-full' alt="" />
        <span className='text-main'>{prod.category.name}</span>
         <p className='line-clamp-1'>{prod.title}</p>
         <div className='flex justify-between my-5 items-center'>
          <span>{prod.price}EGP</span>
          <span>{prod.ratingsAverage} <i className='fa-solid fa-star text-rating'></i></span>
         </div>
       </Link>
         <Button className="my-3"> Add To Cart</Button>
      </div>
    </div>
   
  )
}
