"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { revalidatePath } from "next/cache";

export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("user is not authenticated");
  }
  try {
    const existingBlock = await prisma.blockRequest.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });
    if (existingBlock) {
      await prisma.blockRequest.delete({
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.blockRequest.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong in blocking user");
  }
};

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("user is not authenticated");
  }
  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });
    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowSend = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          recieverId: userId,
        },
      });
      if (existingFollowSend) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowSend.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            recieverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong in blocking user");
  }
};

export const followRequestAccept = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("user is not authenticated");
  }
  try {
    const existingRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        recieverId: currentUserId,
      },
    });

    if (existingRequest) {
      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
      await prisma.followRequest.delete({
        where: {
          id: existingRequest.id,
        },
      });
    }
    function revalidateMultiplePaths(paths:string[]) {
      for (const path of paths) {
         revalidatePath(path)
      }
    }
    
    // Usage
    revalidateMultiplePaths(['/profile', '/'])
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong in acc/dec request");
  }
};

export const followRequestDecline = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("user is not authenticated");
  }
  try {
    const existingRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        recieverId: currentUserId,
      },
    });

    if (existingRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingRequest.id,
        },
      });
    }
    function revalidateMultiplePaths(paths:string[]) {
      for (const path of paths) {
         revalidatePath(path)
      }
    }
    
    // Usage
    revalidateMultiplePaths(['/profile', '/'])
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong in acc/dec request");
  }
};
