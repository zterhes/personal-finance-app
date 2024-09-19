import React from "react";

type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

const TransactionComponent: React.FC<Transaction> = (
  transaction: Transaction
) => {
  return (
    <div className="flex w-full space-x-400 h-[40px] border-t border-grey-100 py-200">
      <div className="flex space-x-200 basis-1/2">
        <img
          className="size-[40px] rounded-full"
          src={transaction.avatar}
          alt="avatar"
        />
        <p className="text-text-preset-4-bold leading-text-preset-4 text-grey-900">
          {transaction.name}
        </p>
      </div>
      <div className="basis-2/12">
        <p className="text-text-preset-5 leading-text-preset-5 text-grey-500">
          {transaction.category}
        </p>
      </div>
      <div className="basis-2/12">
        <p className="text-text-preset-5 leading-text-preset-5 text-grey-500">
          {transaction.date}
        </p>
      </div>
      <div className="text-right">
        <p
          className={`${
            transaction.amount > 0 ? "text-green" : "text-grey-500"
          } text-text-preset-4-bold leading-text-preset-4 `}
        >
          {transaction.amount > 0 ? "+" : ""}
          {transaction.amount}
        </p>
      </div>
    </div>
  );
};

export default TransactionComponent;
