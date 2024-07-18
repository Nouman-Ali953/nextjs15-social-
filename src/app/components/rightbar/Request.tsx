import Image from 'next/image'
import React from 'react'

const Request = () => {
  return (
    <div className="flex flex-row justify-between items-center ">
        <div className="flex gap-2 items-center justify-center">
          <Image
            src="https://images.pexels.com/photos/27107645/pexels-photo-27107645/free-photo-of-shinjuku-temple-charms.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="user"
            width={10}
            height={10}
            className="w-6 h-6 rounded-full"
          />{" "}
          <span className="font-semibold text-[.77rem]">Nauman Mukhtar</span>
        </div>
        <div className="flex gap-1">
            <Image src='/accept.png' alt="accept" width={14} height={14} className='cursor-pointer'/>
            <Image src='/reject.png' alt="accept" width={14} height={14} className='cursor-pointer'/>
        </div>
      </div>
  )
}

export default Request