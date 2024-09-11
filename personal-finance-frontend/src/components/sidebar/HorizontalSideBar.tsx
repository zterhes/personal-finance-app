import React from "react";
import HorizontalSideBaritem from "./HorizontalSideBaritem";
import sideBarData from "../../lib/sideBarData";

type Props = {
  className?: string;
};

const TabletSideBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`${className} h-[74px] w-screen rounded-t-lg bg-gray-900 fixed bottom-0`}
    >
      <div className="flex md:px-500 pt-100 justify-between max-sm:px-200">
        {sideBarData.map((item) => (
          <HorizontalSideBaritem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TabletSideBar;
