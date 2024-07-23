import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import React from "react";

const AddPost = async () => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }
  const addPost = async (formData:FormData) => {
    "use server"
    const desc = formData.get('desc') as string;
    const post = await prisma.post.create({
      data:{
        userId:userId,
        desc:desc,
      }
    })
    revalidatePath('/profile')
    console.log(post)
  }
  const user = await prisma.user.findFirst({
    where:{
      id:userId
    }
  })
  return (
    <>
      <div className="p-2 bg-white rounded-lg shadow-md ">
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex flex-row w-full gap-1 px-1">
            <Image
              src={user?.avatar || '/noAvatar.png'}
              alt="imag"
              width={50}
              height={50}
              className="rounded-full cursor-pointer w-12 h-11"
            />
            <form
              action={addPost}
              className="flex flex-row w-full gap-4 px-4 items-center"
            >
              <textarea
                placeholder="What's on your mind..."
                name="desc"
                className="flex-1 bg-slate-100 px-2 pt-1 rounded-md h-11 text-sm outline-none"
              ></textarea>
              <Image
                src="/emoji.png"
                alt="imag"
                width={16}
                height={16}
                className="self-end cursor-pointer"
              />
              <button className="bg-blue-500 px-2 py-1 text-white rounded-md">send</button>
            </form>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-6 ml-[4.8rem]">
            <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
              <Image src="/Addimage.png" alt="imag" width={18} height={18} />
              <span className="text-sm">Photo</span>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
              <Image src="/Addvideo.png" alt="imag" width={18} height={18} />
              <span className="text-sm">Video</span>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
              <Image src="/poll.png" alt="imag" width={18} height={18} />
              <span className="text-sm">Poll</span>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
              <Image src="/events.png" alt="imag" width={18} height={18} />
              <span className="text-sm">Event</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
