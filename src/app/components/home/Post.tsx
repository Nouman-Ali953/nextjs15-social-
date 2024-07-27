import Image from "next/image";
import React from "react";
import Interaction from "./Interaction";
import Comments from "./Comments";
import prisma from "@/lib/client";

interface PostProps {
  userId: string;
  desc: string;
  img: string;
  basePath: string;
}

const Post: React.FC<PostProps> = async ({ userId, desc, img, basePath }) => {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  return (
    <>
      <div className="p-4 bg-white shadow-md flex flex-col gap-8 rounded-md mb-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between px-3 items-center">
            <div className="flex flex-row gap-4 items-center justify-center">
              <Image
                src={user?.avatar || "/noAvatar.png"}
                alt="user"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />{" "}
              <span className="font-bold">{user?.username}</span>
            </div>
            <div>
              <Image
                src="/more.png"
                alt="user"
                width={14}
                height={14}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 relative">
            {img ? (
              <div className="w-full h-64 relative">
                <Image
                  src={img}
                  layout="fill"
                  className="object-cover rounded-md"
                  alt="postimage"
                />
              </div>
            ) : null}
            <p className="min-h-[1rem] overflow-visible">{desc}</p>
          </div>
          <Interaction />
          <Comments />
        </div>
      </div>
    </>
  );
};

export default Post;
