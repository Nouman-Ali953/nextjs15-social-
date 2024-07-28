import React from "react";
import AddPost from "@/app/components/home/AddPost";
import Feed from "@/app/components/home/Feed";
import LeftMenu from "@/app/components/home/LeftMenu";
import RightMenu from "@/app/components/home/RightMenu";
import PersonMainProfile from "@/app/components/profile/PersonMainProfile";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }
  
  const userPersonalPosts = await prisma.post.findMany({
    where: {
      userId
    },
    include: {
      user: true,
      likes: {
        select: {
          userId: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  if (!user) {
    return null;
  }
  const basePath = user.username;
  // / Filter out posts with null images or provide a default image
  const formattedPosts = userPersonalPosts?.map((post) => ({
    ...post,
    img: post.img ?? "", // Default to an empty string if img is null
  }));

  return (
    <div className="flex gap-4 pt-6">
      <div className="hidden lg:block xl:block w-[20%]">
        <LeftMenu basePath={basePath} />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 w-full">
          <PersonMainProfile basePath={basePath} />
          <AddPost />
          <Feed posts={formattedPosts} basePath={basePath} />
        </div>
      </div>
      <div className="hidden md:hidden xl:block w-[30%]">
        <RightMenu basePath={basePath} />
      </div>
    </div>
  );
};

export default page;
