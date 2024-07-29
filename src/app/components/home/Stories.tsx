"use client";
import { addUserStory } from "@/lib/actions";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";

const Stories = () => {
  const [storyImage, setStoryImage] = useState<any>();

  const add = async () => {
    await addUserStory(storyImage.secure_url);
    setStoryImage("");
  };
  return (
    <>
      <div className="flex flex-col items-center py-1 gap-1 cursor-pointer px-2">
        {storyImage ? (
          <Image
            src={storyImage?.secure_url || ""}
            alt="ok"
            width={56}
            height={56}
            className="object-cover w-[4.4rem] h-[4.4rem] rounded-full"
          />
        ) : (
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(results) => setStoryImage(results.info)}
          >
            {({ open }) => {
              return (
                <div
                  onClick={() => open()}
                  className="flex gap-1 w-[4.4rem] h-[4.4rem]  rounded-full ring-1 justify-center items-center"
                >
                  <MdLibraryAdd style={{ fontSize: "1.5rem" }} />
                </div>
              );
            }}
          </CldUploadWidget>
        )}
        <form action={add}>
          <button
            className={` ${
              storyImage ? "block" : "hidden"
            } text-sm bg-blue-500 text-white px-3 rounded-md py-[0.14rem] `}
          >
            send
          </button>
        </form>
      </div>
    </>
  );
};

export default Stories;
