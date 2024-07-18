import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24">
      {/* Left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="text-blue-600 font-bold text-xl" style={{fontFamily:"sans-serif"}}>
          NEXT.js15Social
        </Link>
      </div>
      {/* center */}
      <div className="hidden md:flex w-[50%]">
        <div className="flex gap-9 text-gray-600 px-4 items-center">
          <Link href="/" className="flex gap-2 items-center justify-center">
            <Image src="/home.png" alt="home" width={16} height={16} className="w-4 h-4" />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/friends.png" alt="home" width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/stories.png" alt="home" width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>
          </Link>
          <div className="md:hidden lg:flex w-[17rem] h-7 ml-5 flex justify-center items-center relative ">
            <Image src='/search.png' alt="seach" width={14} height={14} className="absolute right-4 cursor-pointer"/>
              <input type="text" className="bg-slate-100 w-full h-full pl-4 text-sm outline-none rounded-[5px]"  placeholder="Search here ..."/>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex w-[30%] justify-end items-center gap-4">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
