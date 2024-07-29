import React, { Suspense } from "react";
import prisma from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import UserLoader from "../loadings/UserLoader";
// import dynamic from "next/dynamic";
// const UserLoader = dynamic(import("../loadings/UserLoader"))
const PersonMainProfile = async ({ basePath }: { basePath: string | null }) => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });
  if (!user) {
    return notFound();
  }

  return (
    <>
      <Suspense fallback={<UserLoader />}>
        <div className="bg-transparent flex flex-col gap-10 pt-0">
          <div className="relative w-full">
            <div className={`relative w-full ${basePath ? "h-60" : "h-20"} `}>
              <Image
                src={user?.cover || "/noCover.png"}
                alt="userimage"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full flex flex-col gap-2 items-center bg-white">
              <Image
                src={user?.avatar || "/noAvatar.png"}
                alt="userimage"
                width={64}
                height={64}
                className={`${
                  basePath ? "w-24 h-24 -bottom-10" : "w-12 h-12 -bottom-5"
                } object-cover absolute left-0 right-0 mx-auto rounded-full  ring-4`}
              />
              <span
                className={`w-[18rem] h-24 absolute left-0 right-0 mx-auto  ${
                  basePath ? "mt-12" : "mt-6 w-full"
                } font-bold text-lg text-center flex flex-row justify-center`}
              >
                {user.name && user.surname
                  ? user.name + " " + user.surname
                  : user.username}
              </span>
            </div>
          </div>
          <div
            className={`${
              basePath
                ? "flex flex-row gap-8 justify-center items-center"
                : "hidden"
            }  mt-10 pl-2  `}
          >
            <div className="flex flex-col justify-start items-center text-sm font-semibold">
              <span className="text-sm">{user._count.posts}</span>
              <p className="text-[.7rem] text-gray-500">Posts</p>
            </div>
            <div className="flex flex-col justify-start items-center text-sm font-semibold">
              <span className="text-sm">{user._count.followings}</span>
              <p className="text-[.7rem] text-gray-500">Followers</p>
            </div>
            <div className="flex flex-col justify-start items-center text-sm font-semibold">
              <span className="text-sm">{user._count.followers}</span>
              <p className="text-[.7rem] text-gray-500">Followings</p>
            </div>
          </div>

          <div className={`${basePath ? "hidden" : "flex"} w-full`}>
            <p className="w-full text-center mt-3 text-[.75rem]">
              {user._count.followings} followers
            </p>
          </div>
          <div
            className={`${
              basePath ? "hidden" : "flex"
            } w-full relative bottom-8`}
          >
            <Link href={`/profile/${user.username}`} className="w-full">
              <button className="mb-5 w-full text-[.79rem] bg-blue-500 py-[.28rem] rounded-[3px] px-2 text-white tracking-wide">
                My Profile
              </button>
            </Link>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default PersonMainProfile;
