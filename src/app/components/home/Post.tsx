import Image from "next/image";
import React from "react";
import Interaction from "./Interaction";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

const Post = async ({ post }: { post: FeedPostType }) => {
  

  return (
    <>
      <div className="p-4 bg-white shadow-md flex flex-col gap-8 rounded-md mb-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between px-3 items-center">
            <div className="flex flex-row gap-4 items-center justify-center">
              <Image
                src={post.user?.avatar || "/noAvatar.png"}
                alt="user"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />{" "}
              <span className="font-bold">{post.user?.username}</span>
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
            <p className="min-h-[1rem] overflow-visible">{post.desc}</p>
            {post.img ? (
              <div className="w-full h-64 relative">
                <Image
                  src={post.img}
                  layout="fill"
                  className="object-cover rounded-md"
                  alt="postimage"
                />
              </div>
            ) : null}
          </div>
          <Interaction
            postId={post.id}
            likes={post?.likes?.map((like) => like.userId)}
            commentNumber={post._count?.comments}
          />
          <Comments postId={post.id}  />
        </div>
      </div>
    </>
  );
};

export default Post;
