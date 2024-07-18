import Image from "next/image";
import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-row w-full gap-4 relative">
        <Image
          src="https://images.pexels.com/photos/25412898/pexels-photo-25412898/free-photo-of-a-tent-is-set-up-near-a-lake-with-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="imag"
          width={24}
          height={24}
          className="rounded-full cursor-pointer w-9 h-9"
        />
        <textarea
          placeholder="Write a comment ..."
          className="flex-1 bg-slate-100 px-4 py-2 rounded-md h-9 text-sm outline-0"
        ></textarea>
        <Image
          src="/emoji.png"
          alt="imag"
          width={16}
          height={16}
          className="self-end cursor-pointer  absolute right-6 bottom-2"
        />
      </div>
      <Comment/>
      <Comment/>
    </div>
  );
};

export default Comments;
