import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className=' rounded-lg bg-white shadow-md overflow-scroll'>
      <div className='flex gap-2 w-max p-1'>
      <div className='flex flex-col items-center py-1 gap-1 cursor-pointer px-2'>
          <Image src='https://images.pexels.com/photos/6464537/pexels-photo-6464537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='story image' width={80} height={80} className='w-[4.8rem] h-[4.8rem]  rounded-full ring-2'/>
          <span className='text-sm'>Ricky</span>
      </div>
      <div className='flex flex-col items-center py-1 gap-1 cursor-pointer px-2'>
          <Image src='https://images.pexels.com/photos/6464537/pexels-photo-6464537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='story image' width={80} height={80} className='w-[4.8rem] h-[4.8rem]  rounded-full ring-2'/>
          <span className='text-sm'>Ricky</span>
      </div>
      <div className='flex flex-col items-center py-1 gap-1 cursor-pointer px-2'>
          <Image src='https://images.pexels.com/photos/6464537/pexels-photo-6464537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='story image' width={80} height={80} className='w-[4.8rem] h-[4.8rem]  rounded-full ring-2'/>
          <span className='text-sm'>Ricky</span>
      </div>
      <div className='flex flex-col items-center py-1 gap-1 cursor-pointer px-2'>
          <Image src='https://images.pexels.com/photos/6464537/pexels-photo-6464537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='story image' width={80} height={80} className='w-[4.8rem] h-[4.8rem]  rounded-full ring-2'/>
          <span className='text-sm'>Ricky</span>
      </div>
      <div className='flex flex-col items-center py-1 gap-1 cursor-pointer px-2'>
          <Image src='https://images.pexels.com/photos/6464537/pexels-photo-6464537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='story image' width={80} height={80} className='w-[4.8rem] h-[4.8rem]  rounded-full ring-2'/>
          <span className='text-sm'>Ricky</span>
      </div>
      <div className='flex flex-col items-center py-1 gap-1 cursor-pointer px-2'>
          <Image src='https://images.pexels.com/photos/6464537/pexels-photo-6464537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='story image' width={80} height={80} className='w-[4.8rem] h-[4.8rem]  rounded-full ring-2'/>
          <span className='text-sm'>Ricky</span>
      </div>
      <div className='flex flex-col items-center py-1 gap-1 cursor-pointer px-2'>
          <Image src='https://images.pexels.com/photos/6464537/pexels-photo-6464537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='story image' width={80} height={80} className='w-[4.8rem] h-[4.8rem]  rounded-full ring-2'/>
          <span className='text-sm'>Ricky</span>
      </div>
      </div>
    </div>
  )
}

export default Stories