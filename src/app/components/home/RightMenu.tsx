"use client";
import React from "react";
import FriendsRequest from "../rightbar/FriendsRequest";
import Birthday from "../rightbar/Birthday";
import Ad from "../rightbar/Ad";
import UserDetails from "../profile/UserDetails";
import UserGalary from "../profile/UserGalary";
import { usePathname } from "next/navigation";

const RightMenu = () => {
  const pathName = usePathname();
  const basePath = pathName.split("/")[1];
  console.log(basePath);
  return (
    <div
      className={`flex flex-col gap-6 ${basePath !== "profile" ? "sticky top-[16px]" : ""}`}
    >
      {basePath === "profile" ? (
        <>
          <UserDetails />
          <UserGalary />
        </>
      ) : null}
      <FriendsRequest />
      <Birthday />
      <Ad />
    </div>
  );
};

export default RightMenu;
