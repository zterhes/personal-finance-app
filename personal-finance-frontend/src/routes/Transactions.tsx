import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/searchBar/SearchBar";
import { fetchTransactions } from "../state/transactions";
import TransactionComponent from "../components/TransactionComponent";
import LoadingSpinner from "../components/LoadingSpinner";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Transactions = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["transactions"],
      queryFn: fetchTransactions,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        if (lastPage.length === 0) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
        if (firstPageParam <= 1) {
          return undefined;
        }
        return firstPageParam - 1;
      },
    });

  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return isLoading ? (
    <div className="w-full h-full flex justify-center items-center">
      <LoadingSpinner />
    </div>
  ) : error ? (
    <div className="w-full h-full flex justify-center items-center">
      <p>Error</p>
    </div>
  ) : (
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
        {data?.pages.map((transactions) =>
          transactions.map((transaction, index) => (
            <TransactionComponent key={index} {...transaction} />
          ))
        )}
        <div ref={ref} className="border-t border-grey-100 py-200"></div>
      </div>
    </div>
  );
};

export default Transactions;
