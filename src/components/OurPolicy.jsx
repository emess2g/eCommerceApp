import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm sm:text-sm md:text-base text-gray-700'>
      
      <div className="">
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-medium'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassel free exhange policy</p>
      </div>
    </div>
  )
}

export default OurPolicy
