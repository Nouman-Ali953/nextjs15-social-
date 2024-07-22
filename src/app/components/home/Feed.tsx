import Image from "next/image";
import React from "react";
import Post from "./Post";

interface PostType {
  userId: string;
  desc: string;
  img: string;
}
interface FeedProps {
  posts: PostType[];
  basePath: string;
}


const Feed : React.FC <FeedProps> = ({posts,basePath})=> {
  return (
    <>
       {posts?.map((post, index) => (
        <Post key={index} userId={post.userId} desc={post.desc} img={post.img} basePath={basePath}/>
      ))}
    </>
  );
};

export default Feed;
