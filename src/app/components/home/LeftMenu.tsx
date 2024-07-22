import React from "react";
import Ad from "../rightbar/Ad";
import Menu from "../leftbar/Menu";
import PersonMainProfile from "../profile/PersonMainProfile";

interface LeftMenuProps {
  basePath: string;
}
const LeftMenu: React.FC<LeftMenuProps> = ({ basePath }) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {basePath ? null : (
          <div className="p-2 bg-white shadow-md h-52 rounded-sm flex flex-col gap-2 ">
            <PersonMainProfile basePath={basePath} />
          </div>
        )}
        <Menu />
        <Ad />
      </div>
    </>
  );
};

export default LeftMenu;
