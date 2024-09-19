import React from "react";

import right from "../assets/icons/icon-caret-right.svg";
import left from "../assets/icons/icon-caret-left.svg";

type Props = {
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<Props> = (props) => {
  const { totalPages, currentPage, setCurrentPage } = props;
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="pt-300 w-full flex justify-between">
      <button
        className="flex items-center space-x-200 p-200 border border-beige-500 rounded-lg w-[94px] h-[40px]"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        <img className="size-200" src={left} alt="prev" />
        <p>Prev</p>
      </button>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={
              currentPage === index + 1
                ? "active"
                : "" +
                  " p-200 border border-beige-500 rounded-lg w-[40px] h-[40px]"
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className="flex items-center space-x-200 p-200 border border-beige-500 rounded-lg w-[94px] h-[40px]"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        <p>Next</p>
        <img className="size-200" src={right} alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
