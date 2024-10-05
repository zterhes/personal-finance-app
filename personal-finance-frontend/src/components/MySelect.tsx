import React from "react";
import { Field, Label, Select } from "@headlessui/react";

type Props = {
  label: string;
  sortValue: string;
  setSortValue: (value: string) => void;
  sortByValues: { title: string; logicalPlaceholder: string }[];
  buttonWidth: string;
};

const MySelect: React.FC<Props> = ({
  label,
  sortValue,
  setSortValue,
  sortByValues,
  buttonWidth,
}) => {
  return (
    <Field className="flex items-center space-x-100">
      <Label className="text-grey-500 text-text-preset-4 leading-text-preset-4">
        {label}
      </Label>
      <div className=" inline-block h-[45px] items-center space-x-100 relative text-left">
        <Select
          as="select"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          className={`w-[${buttonWidth}] flex justify-between items-center border border-beige-500 rounded-lg py-150 px-250 space-x-200 bg-transparent`}
        >
          {sortByValues.map((item) => (
            <option
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              key={item.title}
              value={item.logicalPlaceholder}
            >
              {item.title}
            </option>
          ))}
        </Select>
      </div>
    </Field>
  );
};

export default MySelect;
