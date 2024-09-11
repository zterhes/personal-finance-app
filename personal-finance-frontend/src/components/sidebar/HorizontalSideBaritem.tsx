import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  name: string;
  path: string;
  icon: string;
};

const HorizontalSideBaritem: React.FC<Props> = (props) => {
  const { name, path, icon } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <div
      className={`${
        isActive ? `bg-beige-100 border-b-4 border-green` : ``
      } pb-150 pt-100 rounded-t-lg`}
    >
      <button
        className="flex items-center flex-col space-y-50 md:w-[104px] w-[68px]"
        onClick={() => navigate(path)}
      >
        <img className="size-300" src={icon} alt={name} />
        <p
          className={`${
            isActive ? `text-grey-900` : `text-grey-300`
          } text-text-preset-5 leading-text-preset-5 font-bold text-grey-300 max-sm:hidden`}
        >
          {name}
        </p>
      </button>
    </div>
  );
};

export default HorizontalSideBaritem;
