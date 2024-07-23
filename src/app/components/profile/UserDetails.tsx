import React from "react";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface UserDetailsProps {
  path: string;
}

const UserDetails: React.FC<UserDetailsProps> = async ({ path }) => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  if (!user) {
    return notFound();
  }

  const createdAtDate = new Date(user.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log("this is ", user.username + " " + path);
  return (
    <div className="p-4 shadow-md rounded-sm bg-white flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <p className="text-[0.79rem] font-semibold text-gray-500">
          User Information
        </p>
        <button className="text-[0.7rem] text-blue-600 font-semibold">
          see all
        </button>
      </div>
      <div className="flex gap-1 items-center ">
        <p className="font-semibold">
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </p>{" "}
        <span className="text-[.72rem] text-gray-400">
          {user.name && user.surname ? "@" + user.username : ""}
        </span>
      </div>
      <div className="text-[.71rem]">
        {user.description ? user.description : ""}
      </div>
      <div>
        {user.city ? (
          <p className="text-[.72rem] flex gap-1 items-center tracking-wide">
            <Image src="/map.png" alt="pngs" width={12} height={12} /> Living in{" "}
            <span className="font-semibold">{user.city}</span>
          </p>
        ) : null}
        {user.school ? (
          <p className="text-[.72rem] flex gap-1 items-center tracking-wide">
            <Image src="/school.png" alt="pngs" width={12} height={12} /> went
            to <span className="font-semibold">{user.school}</span>
          </p>
        ) : null}
        {user.work ? (
          <p className="text-[.72rem] flex gap-1 items-center tracking-wide">
            <Image src="/work.png" alt="pngs" width={12} height={12} /> works at
            <span className="font-semibold">{user.work}</span>
          </p>
        ) : null}

        <div className="flex justify-between mt-2">
          {user.website ? (
            <Link
              href="codezbit.com"
              className="text-blue-500 text-[.68rem] font-semibold flex gap-[.1rem] items-center"
            >
              <Image src="/link.png" alt="imsg" width={12} height={12} />
              {user.website}
            </Link>
          ) : null}
          <span className="flex items-center gap-1 text-[.65rem]">
            <Image src="/date.png" alt="imsg" width={12} height={12} />
            Joined {formattedDate}
          </span>
        </div>
      </div>
      {user.username && user.username !== path ? (
        <div className="flex flex-col gap-2 mt-2">
          <button className="text-white bg-blue-500 rounded-md text-sm px-2 py-1 tracking-wide">
            Following
          </button>
          <button className="text-red-600 self-end text-[.75rem] font-semibold">
            Block User
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default UserDetails;
