import React from "react";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import UserDetailInteraction from "./UserDetailInteraction";
import UpdateInteraction from "./UpdateInteraction";

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

  const isFollowing = false;
  const isFollowSent = false;
  const isBlocked = false;

  return (
    <div className="p-4 shadow-md rounded-sm bg-white flex flex-col gap-2">
      <UpdateInteraction userId={userId}/>
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
        <UserDetailInteraction
          userId={user.id}
          isFollowing={isFollowing}
          isFollowSent={isFollowSent}
          isBlocked={isBlocked}
        />
      ) : null}
    </div>
  );
};

export default UserDetails;
