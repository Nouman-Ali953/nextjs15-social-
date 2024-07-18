"use client";

import React from "react";
import Ad from "../rightbar/Ad";
import Menu from "../leftbar/Menu";
import PersonMainProfile from "../profile/PersonMainProfile";
import { usePathname } from "next/navigation";

const LeftMenu = () => {
  const pathName = usePathname();
  const basePath = pathName.split("/")[1];
  return (
    <>
      <div className="flex flex-col gap-6">
        {basePath !== "profile" ? (
          <div className="p-2 bg-white shadow-md h-52 rounded-sm flex flex-col gap-2 ">
            <PersonMainProfile />
          </div>
        ) : null}
        <Menu />
        <Ad />
      </div>
    </>
  );
};

export default LeftMenu;
