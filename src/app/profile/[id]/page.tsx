import AddPost from "@/app/components/home/AddPost";
import Feed from "@/app/components/home/Feed";
import LeftMenu from "@/app/components/home/LeftMenu";
import RightMenu from "@/app/components/home/RightMenu";
import PersonMainProfile from "@/app/components/profile/PersonMainProfile";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-4 pt-6">
      <div className="hidden lg:block xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 w-full">
          <PersonMainProfile />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden md:hidden xl:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default page;
