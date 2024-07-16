"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="flex flex-col gap-[5.8px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={`w-7 h-1 rounded-sm bg-blue-500 ${isOpen ? 'rotate-45' : '' } origin-left duration-500 ease-in-out`} />
        <div className={`w-7 h-1 rounded-sm bg-blue-500 ${isOpen ? 'opacity-0' : '' } origin-left duration-500 ease-in-out`} />
        <div className={`w-7 h-1 rounded-sm bg-blue-500 ${isOpen ? '-rotate-45' : '' } origin-left duration-500 ease-in-out`} />
      </div>
      {isOpen && (
        <div className="absolute h-[calc(100vh-96px)] w-full font-bold left-0 top-24 bg-white flex flex-col gap-8 items-center justify-center font-medium text-xl z-10">
          <Link href="#">Home</Link>
          <Link href="#">Friends</Link>
          <Link href="#">Groups</Link>
          <Link href="#">Stories</Link>
          <Link href="#">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
