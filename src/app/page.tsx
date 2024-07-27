import React from "react";
import LeftMenu from "./components/home/LeftMenu";
import Stories from "./components/home/Stories";
import RightMenu from "./components/home/RightMenu";
import AddPost from "./components/home/AddPost";
import Feed from "./components/home/Feed";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const page = async ({ params }: { params: { username: string } }) => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const following = await prisma.follower.findMany({
    where: {
      followerId: userId,
    },
    select: {
      followingId: true,
    },
  });

  const followingIds = following.map((f) => f.followingId);
  const ids = [userId, ...followingIds];
  const userPersonalPosts = await prisma.post.findMany({
    where: {
      userId: {
        in: ids,
      },
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
  const formattedPosts = userPersonalPosts.map((post) => ({
    ...post,
    img: post.img ?? "", // Default to an empty string if img is null
  }));

  return (
    <div className="flex gap-4 pt-6">
      <div className="hidden lg:block xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 w-full">
          <Stories />
          <AddPost />
          <Feed posts={formattedPosts} />
        </div>
      </div>
      <div className="hidden md:hidden xl:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default page;
