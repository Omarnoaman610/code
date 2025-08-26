'use client'
import React from 'react'
import { Puff } from 'react-loader-spinner'

export default function loading() {
  return (
    <div className='flex justify-center items-center h-[90%]'>
      
      <Puff
  visible={true}
  height="100"
  width="100"
  color="green
  "
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}
