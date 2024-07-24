"use client";
import React, { useState } from "react";

const UpdateInteraction = ({ userId }: { userId: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between">
        <p className="text-[0.79rem] font-semibold text-gray-500">
          User Information
        </p>
        <button
          className="text-[0.7rem] text-blue-600 font-semibold"
          onClick={() => setOpen((prev) => !prev)}
        >
          {userId ? (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-sm outline-none">
              update user
            </span>
          ) : (
            "see all"
          )}
        </button>
        {open ? (
          <div className="fixed inset-0 grid place-items-center bg-opacity-25 z-20 bg-black shadow-gray-600">
            <div className="w-[70%] h-3/4 bg-opacity-100 bg-white shadow-xl rounded-md">
              {/* Content goes here */}
              <p
                onClick={() => setOpen((prev) => !prev)}
                className="w-full m-3 cursor-pointer font-semibold text-gray-600 text-[1.2rem]"
              >
                X
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default UpdateInteraction;
