import Image from "next/image";
import React from "react";

const Interaction = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row gap-4">
        <div className=" cursor-pointer flex flex-row gap-2 items-center bg-slate-100 px-2 rounded-xl justify-center">
          <Image src="/like.png" alt="like" width={15} height={15} />
          <span className="mb-1 text-sm text-gray-300">|</span>
          <span className="text-[.79rem]">12<span className="hidden md:inline"> Likes</span></span>
        </div>
        <div className=" cursor-pointer flex flex-row gap-2 items-center bg-slate-100 px-2 rounded-xl justify-center">
          <Image src="/messages.png" alt="like" width={15} height={15} />
          <span className="mb-1 text-sm text-gray-300">|</span>
          <span className="text-[.79rem]">3<span className="hidden md:inline"> Comments</span></span>
        </div>
      </div>
      <div className=" cursor-pointer flex flex-row gap-2 items-center bg-slate-100 px-2 rounded-xl justify-center">
        <Image src="/share.png" alt="like" width={14} height={14} />
          <span className="mb-1 text-sm text-gray-300">|</span>
        <span className="text-[.79rem]">7<span className="hidden md:inline"> Shares</span></span>
      </div>
    </div>
  );
};

export default Interaction;
