import { useQuery } from "@tanstack/react-query";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/searchBar/SearchBar";
import { fetchTransactions } from "../state/transactions";
import TransactionComponent from "../components/TransactionComponent";
import { useState } from "react";
import Pagination from "../components/Pagination";

const Transactions = () => {
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const results = useQuery({
    queryKey: ["transactions", { userId: "1" }],
    queryFn: fetchTransactions,
  });

  const totalPages =
    results.data?.length === undefined
      ? 0
      : results.data?.length / itemsPerPage;
  console.log("length", results.data?.length);
  console.log("totalPages", totalPages);

  const currentItems = results.data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <PageHeader title="Transactions" />
      <div className="w-full h-full p-400 bg-white rounded-lg space-y-300">
        <SearchBar />
        <div className="flex space-x-400 py-150 px-200 w-full max-md:hidden">
          <p className="text-text-preset-5 leading-text-preset-5 text-grey-500 basis-1/2">
            Recipient / Sender
          </p>
          <p className="text-text-preset-5 leading-text-preset-5 text-grey-500  basis-2/12">
            Category
          </p>
          <p className="text-text-preset-5 leading-text-preset-5 text-grey-500  basis-2/12">
            Transaction Date
          </p>
          <p className="text-text-preset-5 leading-text-preset-5 text-grey-500  text-right">
            Amount
          </p>
        </div>
        {currentItems?.map((transaction, index) => (
          <TransactionComponent key={index} {...transaction} />
        ))}
        <Pagination
          {...{ itemsPerPage, totalPages, currentPage, setCurrentPage }}
        />
      </div>
    </div>
  );
  868;
};

export default Transactions;
