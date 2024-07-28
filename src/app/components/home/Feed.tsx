import React from "react";
import Post from "./Post";
import { Post as PostType, User } from "@prisma/client";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};


const Feed = ({ posts }: { posts: FeedPostType[] }) => {
  return (
    <>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
