import React from "react";

type Props = {
  title: string;
};

const PageHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="w-full h-[56px]">
      <h1 className="text-text-preset-1 font-bold text-grey-900 mb-400">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
