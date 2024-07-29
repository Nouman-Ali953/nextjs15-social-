import React from "react";
import Post from "./Post";
import { Post as PostType, User } from "@prisma/client";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

const Feed = async({ posts }: { posts: FeedPostType[] }) => {
  const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(2000)
  return (
    <>
      {posts?.map((post) => (
          <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
