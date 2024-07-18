import Image from "next/image";
import React from "react";
import Request from "./Request";

const FriendsRequest = () => {
  return (
    <div className="p-4 shadow-md rounded-sm bg-white flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <p className="text-[0.79rem] font-semibold text-gray-500">
          Friend Requests
        </p>
        <button className="text-[0.7rem] text-blue-600 font-semibold">
          see all
        </button>
      </div>
      <div className="flex flex-col gap-3">

      <Request/>
      <Request/>
      <Request/>
      </div>
    </div>
  );
};

export default FriendsRequest;
