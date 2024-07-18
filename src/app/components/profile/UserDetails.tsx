import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserDetails = () => {
  return (
    <div className="p-4 shadow-md rounded-sm bg-white flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <p className="text-[0.79rem] font-semibold text-gray-500">
          User Information
        </p>
        <button className="text-[0.7rem] text-blue-600 font-semibold">
          see all
        </button>
      </div>
      <div className="flex gap-1 items-center ">
        <p className="font-semibold">Elve Welver</p>{" "}
        <span className="text-[.72rem] text-gray-400">@devops</span>
      </div>
      <div className="text-[.71rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum.😊
      </div>
      <div>
        <p className="text-[.72rem] flex gap-1 items-center tracking-wide">
         <Image src='/map.png' alt="pngs" width={12} height={12}/> Living in <span className="font-semibold">Lahore</span>
        </p>
        <p className="text-[.72rem] flex gap-1 items-center tracking-wide">
         <Image src='/school.png' alt="pngs" width={12} height={12}/> went to <span className="font-semibold">Garrison University</span>
        </p>
        <p className="text-[.72rem] flex gap-1 items-center tracking-wide">
         <Image src='/work.png' alt="pngs" width={12} height={12}/> works at <span className="font-semibold">codezbit Inc.</span>
        </p>
        <div className="flex justify-between mt-2">
          <Link href="codezbit.com" className="text-blue-500 text-[.68rem] font-semibold flex gap-[.1rem] items-center">
          <Image src="/link.png" alt="imsg" width={12} height={12} />
          codezbit.com</Link>
          <span className="flex items-center gap-1 text-[.65rem]">
            <Image src="/date.png" alt="imsg" width={12} height={12} />
            Joined 12 November 2024
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <button className="text-white bg-blue-500 rounded-md text-sm px-2 py-1 tracking-wide">
          Following
        </button>
        <button className="text-red-600 self-end text-[.75rem] font-semibold">
          Block User
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
