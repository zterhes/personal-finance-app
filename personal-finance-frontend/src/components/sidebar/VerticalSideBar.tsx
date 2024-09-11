import logo from "../../assets/logo-large.svg";
import smallLogo from "../../assets/logo-small.svg";
import sideBarData from "../../lib/sideBarData";
import SideBarItem from "./VerticalSideBarItem";
import minizeIcon from "../../assets/icons/icon-minimize-menu.svg";
import { useState } from "react";

type Props = {
  className?: string;
};

const DesktopSideBar: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${className} ${
        isOpen ? `w-1/5` : `w-1/12`
      } h-screen bg-gray-900 rounded-r-lg`}
    >
      <div className=" px-400 py-500 mb-300">
        <img src={isOpen ? logo : smallLogo} alt="logo" />
      </div>
      <div className="mb-300 h-3/4">
        {sideBarData.map((item) => (
          <SideBarItem key={item.name} {...item} isOpen={isOpen} />
        ))}
      </div>
      <button
        className="flex px-400 py-200 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className={`${isOpen ? `` : `rotate-180`} w-300 h-300`}
          src={minizeIcon}
          alt="minimize"
        />
        <p
          className={`${
            isOpen ? `` : `hidden`
          } ml-200 text-grey-300 h-300 text-text-preset-3 leading-text-preset-3 w-full font-bold`}
        >
          Minimize menu
        </p>
      </button>
    </div>
  );
};

export default DesktopSideBar;
