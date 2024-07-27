import React from "react";
import FriendsRequest from "../rightbar/FriendsRequest";
import Birthday from "../rightbar/Birthday";
import Ad from "../rightbar/Ad";
import UserDetails from "../profile/UserDetails";
import UserGalary from "../profile/UserGalary";
import FollowSuggestion from "../rightbar/FollowSuggestion";

interface RightMenuProps {
  basePath: string;
}
const RightMenu: React.FC<RightMenuProps> = ({basePath}) => {
  return (
    <div
      className={`flex flex-col gap-6 ${basePath ? "sticky top-[16px]" : ""}`}
    >
      {basePath ? (
        <>
          <UserDetails path={basePath}/>
          <UserGalary />
        </>
      ) : null}
      <FriendsRequest />
      <FollowSuggestion />
      <Birthday />
      <Ad />
    </div>
  );
};

export default RightMenu;
