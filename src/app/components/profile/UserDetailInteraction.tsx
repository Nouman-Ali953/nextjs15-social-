"use client";
import { switchBlock, switchFollow } from "@/lib/actions";
import { send } from "process";
import React, { useOptimistic, useState } from "react";

interface FollowProps {
  userId: string;
  isFollowing: Boolean;
  isFollowSent: Boolean;
  isBlocked: Boolean;
}
const UserDetailInteraction = ({
  userId,
  isFollowing,
  isFollowSent,
  isBlocked,
}: FollowProps) => {
  const [userState, setUserState] = useState({
    Following: isFollowing,
    FollowSent: isFollowSent,
    Blocked: isBlocked,
  });

  const block = async () => {
    switchOptimisticState("block");
    await switchBlock(userId);
    setUserState((prev) => ({
      ...prev,
      Blocked: !prev.Blocked,
    }));
  };

  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        Following: prev.Following && false,
        FollowSent: !prev.Following && !prev.FollowSent ? true : false,
      }));
    } catch (error) {
      console.log(error);
      throw new Error("something went wrong");
    }
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state: any, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            Following: state.Following && false,
            FollowSent: !state.Following && !state.FollowSent ? true : false,
            text: "sending...",
            sending: true,
          }
        : { ...state, blocked: !state.blocked }
  );
  return (
    <>
      <div className="flex flex-col gap-2 mt-2">
        <form action={follow} className="w-full flex flex-col gap-2 mt-2">
          <button className="text-white bg-blue-500 rounded-md text-sm px-2 py-1 tracking-wide">
            {optimisticState.Following
              ? "Following"
              : optimisticState.FollowSent
              ? "Follow Request Sent"
              : "Follow"}
          </button>
        </form>
        <form action={block} className="self-end">
          <button className="text-red-600 self-end text-[.75rem] font-semibold">
            {optimisticState.Blocked ? "Unblock User" : "Block User"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UserDetailInteraction;
