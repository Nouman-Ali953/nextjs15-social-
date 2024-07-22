import React from "react";
import AddPost from "@/app/components/home/AddPost";
import Feed from "@/app/components/home/Feed";
import LeftMenu from "@/app/components/home/LeftMenu";
import RightMenu from "@/app/components/home/RightMenu";
import PersonMainProfile from "@/app/components/profile/PersonMainProfile";

const page = ({ params }: { params: { username: string } }) => {
  const basePath = params.username;
  //
  return (
    <div className="flex gap-4 pt-6">
      <div className="hidden lg:block xl:block w-[20%]">
        <LeftMenu basePath={basePath} />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 w-full">
          <PersonMainProfile basePath={basePath} />
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
