import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import downIcon from "../assets/icons/icon-caret-down.svg";

type Props = {
  label: string;
  placeholder: string;
  values: {
    title: string;
    logicalPlaceholder: string;
  }[];
  buttonWidth: string;
};
const Dropdown: React.FC<Props> = ({
  label,
  placeholder,
  values,
  buttonWidth,
}) => {
  return (
    <div className="flex items-center space-x-100">
      <p className="text-grey-500 text-text-preset-4 leading-text-preset-4">
        {label}
      </p>
      <Menu
        as="div"
        className={
          " inline-block h-[45px] items-center space-x-100 relative text-left"
        }
      >
        <MenuButton
          className={`w-[${buttonWidth}] flex justify-between items-center border border-beige-500 rounded-lg py-150 px-250 space-x-200`}
        >
          <p className="text-text-preset-4 leading-text-preset-4 text-grey-900">
            {placeholder}
          </p>
          <img src={downIcon} alt="downIcon" />
        </MenuButton>
        <MenuItems
          transition
          className={`flex z-10 mt-2 origin-top-right w-[${buttonWidth}] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
        >
          <div>
            {values.map((value) => (
              <MenuItem>
                <a
                  href={value.logicalPlaceholder}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  {value.title}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Dropdown;
