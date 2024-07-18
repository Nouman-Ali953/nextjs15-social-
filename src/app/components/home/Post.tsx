import Image from "next/image";
import React from "react";
import Interaction from "./Interaction";
import Comments from "./Comments";

const Post = () => {
  return (
    <>
      <div className="p-4 bg-white shadow-md flex flex-col gap-8 rounded-md mb-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between px-3 items-center">
            <div className="flex flex-row gap-4 items-center justify-center">
              <Image
                src="https://images.pexels.com/photos/27107645/pexels-photo-27107645/free-photo-of-shinjuku-temple-charms.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="user"
                width={16}
                height={16}
                className="w-10 h-10 rounded-full"
              />{" "}
              <span className="font-bold">Nauman Mukhtar</span>
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
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/15649537/pexels-photo-15649537/free-photo-of-close-up-of-sea-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                layout="fill"
                className="object-cover rounded-md"
                alt="postimage"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. This setup allows you to customize and apply different
              fonts to various text elements within your Next.js and Tailwind
              CSS project.
            </p>
          </div>
          <Interaction />
          <Comments />
        </div>
      </div>
    </>
  );
};

export default Post;
