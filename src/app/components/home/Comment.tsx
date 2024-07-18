import Image from 'next/image'
import React from 'react'

const Comment = () => {
  return (
    <div>
        <div className="flex flex-row justify-between items-center mt-6">
          <div className="flex flex-row gap-4 items-center justify-center">
            <Image
              src="https://images.pexels.com/photos/22691219/pexels-photo-22691219/free-photo-of-hand-with-marks-hanging-over-wavy-water-with-reflection.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="user"
              width={16}
              height={16}
              className="w-10 h-10 rounded-full"
            />{" "}
            <span className="font-semibold text-gray-500">Jeo Jack</span>
          </div>
          <div>
            <Image
              src="/more.png"
              alt="user"
              width={14}
              height={14}
              className="cursor-pointer"
            />
          </div>
        </div>
        <p className="ml-[3.3rem] pr-20 text-sm text-gray-400">
          This setup allows you to customize and apply different fonts to
          various text elements within your Next.js and Tailwind CSS project.
        </p>
        <div className="flex flex-row gap-6 items-center">
          <div className="ml-[3.3rem] mt-2 w-18 cursor-pointer flex flex-row gap-2 items-center bg-slate-100 px-[8px] rounded-xl justify-center py-[1px]">
            <Image src="/like.png" alt="like" width={15} height={15} />
            <span className="mb-1 text-sm text-gray-300">|</span>
            <span className="text-[0.75rem]">12</span>
          </div>
          <span className="text-[0.75rem] text-gray-400 mt-2 space-x-1">Reply</span>
        </div>
      </div>
  )
}

export default Comment