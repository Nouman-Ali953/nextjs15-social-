import React from "react";
import prisma from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

interface User {
  id: string;
  username: string;
  avatar: string | null;
  cover: string | null;
  name: string | null;
  surname: string | null;
  description: string | null;
  city: string | null;
  school: string | null;
  work: string | null;
  website: string | null;
  createdAt: Date;
}
interface PersonMainProfileProps {
  basePath: string;
}

const PersonMainProfile: React.FC<PersonMainProfileProps> = async ({
  basePath,
}) => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  return (
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
        <div className="relative w-full flex flex-col gap-2 items-center">
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
            className={`w-32 h-24 absolute left-6 right-0 mx-auto  ${
              basePath ? "mt-12" : "mt-6"
            } font-bold text-lg`}
          >
            Elva Weaver
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
          <span className="text-sm">142</span>
          <p className="text-[.7rem] text-gray-500">Posts</p>
        </div>
        <div className="flex flex-col justify-start items-center text-sm font-semibold">
          <span className="text-sm">1.4K</span>
          <p className="text-[.7rem] text-gray-500">Followers</p>
        </div>
        <div className="flex flex-col justify-start items-center text-sm font-semibold">
          <span className="text-sm">120</span>
          <p className="text-[.7rem] text-gray-500">Followings</p>
        </div>
      </div>

      <div className={`${basePath ? "hidden" : "flex"} w-full`}>
        <p className="w-full text-center mt-3 text-[.75rem]">500 followers</p>
      </div>
      <div
        className={`${basePath ? "hidden" : "flex"} w-full relative bottom-8`}
      >
        <Link href="/profile/sdf" className="w-full">
          <button className="mb-5 w-full text-[.79rem] bg-blue-500 py-[.28rem] rounded-[3px] px-2 text-white tracking-wide">
            My Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonMainProfile;
