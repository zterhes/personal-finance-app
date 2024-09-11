import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  name: string;
  path: string;
  icon: string;
  isOpen: boolean;
};

const SideBarItem: React.FC<Props> = (props) => {
  const { name, path, icon, isOpen } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <div
      className={`${
        isActive ? `bg-beige-100 border-l-4 border-green` : ``
      } mr-300 my-50 rounded-r-lg`}
    >
      <button
        onClick={() => navigate(path)}
        className="flex items-center py-200 px-400 "
      >
        <img className={` w-300 h-300 mr-200`} src={icon} alt={name} />
        <p
          className={`${
            isActive ? `text-grey-900` : `text-grey-300`
          } h-300 text-text-preset-3 leading-text-preset-3 w-full font-bold mb-50 ${
            isOpen ? `` : `hidden`
          }`}
        >
          {name}
        </p>
      </button>
    </div>
  );
};

export default SideBarItem;
