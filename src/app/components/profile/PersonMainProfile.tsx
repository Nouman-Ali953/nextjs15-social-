import Image from "next/image";
import React from "react";

const PersonMainProfile = () => {
  return (
    <div className="bg-transparent flex flex-col gap-10 pt-0">
      <div className="relative w-full">
        <div className="relative w-full h-60">
          <Image
            src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="userimage"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full flex flex-col gap-2 items-center">
          <Image
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="userimage"
            width={64}
            height={64}
            className="w-24 h-24 object-cover absolute left-0 right-0 mx-auto rounded-full -bottom-10 ring-4"
          />
          <span className="w-32 h-24 absolute left-6 right-0 mx-auto mt-12 font-bold text-lg">
            Elva Weaver
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-8 justify-center items-center mt-10 pl-2">
        <div className="flex flex-col justify-start items-center text-sm font-semibold">
          <span className="text-sm">142</span>
          <p className="text-[.7rem] text-gray-500">Posts</p>
        </div>
        <div className="flex flex-col justify-start items-center text-sm font-semibold">
          <span className="text-sm">1.4K</span>
          <p className="text-[.7rem] text-gray-500">Followers</p>
        </div>
        <div className="flex flex-col justify-start items-center text-sm font-semibold">
          <span className="text-sm">120</span>
          <p className="text-[.7rem] text-gray-500">Followings</p>
        </div>
      </div>
    </div>
  );
};

export default PersonMainProfile;
