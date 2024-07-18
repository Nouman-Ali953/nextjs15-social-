import React from "react";
import LeftMenu from "./components/home/LeftMenu";
import Stories from "./components/home/Stories";
import RightMenu from "./components/home/RightMenu";
import AddPost from "./components/home/AddPost";
import Feed from "./components/home/Feed";

const page = () => {
  return (
    <div className="flex gap-4 pt-6">
      <div className="hidden lg:block xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[80%] xl:w-[57%]">
        <div className="flex flex-col gap-6 w-full">
          <Stories />
          <AddPost/>
          <Feed/>
        </div>
      </div>
      <div className="hidden md:hidden xl:block w-[20%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default page;
