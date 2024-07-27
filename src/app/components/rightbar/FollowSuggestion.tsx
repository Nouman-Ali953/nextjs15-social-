import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import SuggestionButton from "./SuggestionButton";

const FollowSuggestion = async () => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    return null;
  }

  const alreadyFollowing = await prisma.follower.findMany({
    where: {
      followerId: currentUserId,
    },
  });

  const alreadySendRequest = await prisma.followRequest.findMany({
    where: {
      senderId: currentUserId,
    },
  });

  const SuggestPeoples = await prisma.user.findMany({
    where: {
      id: {
        not: currentUserId,
        notIn: [
          ...alreadySendRequest.map((foll) => foll.recieverId),
          ...alreadyFollowing.map((foll) => foll.followingId),
        ],
      },
    },
  });
  return (
    <div className="p-4 shadow-md rounded-sm bg-white flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <p className="text-[0.79rem] font-semibold text-gray-500">
          Follow people to see their posts
        </p>
        <button className="text-[0.7rem] text-blue-600 font-semibold">
          see all
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {SuggestPeoples.map((people) => (
          <>
            <div
              key={people.id}
              className="flex justify-between px-1 py-1 items-center"
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={people.avatar || "/noAvatar.png"}
                  alt="isg"
                  width={26}
                  height={26}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <p className="text-sm">{people.username}</p>
              </div>
              <SuggestionButton userId={people.id}/>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FollowSuggestion;
