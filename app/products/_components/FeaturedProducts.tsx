import getProducts from '@/apis/products.api'
import { ProductInterface } from '@/interfaces/product.interface'
import React from 'react'
import ProductItem from './ProductItem'

export default async function FeaturedProducts() {
  
    const data:ProductInterface[] = await getProducts()
  
    return (
    <div className='flex flex-wrap'>
      
      {data.map((prod:ProductInterface)=><ProductItem key={prod._id} prod={prod}></ProductItem>)}
    </div>
  )
}
