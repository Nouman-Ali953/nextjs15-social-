import Image from "next/image";
import React from "react";
import Stories from "./Stories";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const GetStories = async () => {
    const {userId} = auth()
    if (!userId) {
        return ;
    }
  const followingStories = await prisma.story.findMany({
    where:{
        expiresAt:{
            gt:new Date()
        }
    }
  })
  console.log(followingStories)
  return (
    <>
      <div className=" rounded-lg bg-white shadow-md overflow-scroll">
        <div className="flex gap-2 w-max p-1">
          <Stories />
          {followingStories?.map((story) => (
            <div className="flex flex-col items-center py-1 gap-1 cursor-pointer px-2" key={story.id}>
              <Image
                src={story.img}
                alt="story image"
                width={80}
                height={80}
                className="w-[4.4rem] h-[4.4rem]  rounded-full ring-2"
              />
              <span className="text-sm"></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetStories;
