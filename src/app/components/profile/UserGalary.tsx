import React from "react"
import Image from "next/image"

const UserGalary = () => {
  return (
    <div className="p-4 shadow-md rounded-sm bg-white flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <p className="text-[0.79rem] font-semibold text-gray-500">User Media</p>
        <button className="text-[0.7rem] text-blue-600 font-semibold">
          see all
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-[1.4rem]">
        <div className="relative w-20 h-24">
          <Image
            src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img"
            layout="fill"
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="relative w-20 h-24">
          <Image
            src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img"
            layout="fill"
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="relative w-20 h-24">
          <Image
            src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img"
            layout="fill"
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="relative w-20 h-24">
          <Image
            src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img"
            layout="fill"
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="relative w-20 h-24">
          <Image
            src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img"
            layout="fill"
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="relative w-20 h-24">
          <Image
            src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img"
            layout="fill"
            className="w-20 h-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UserGalary;
