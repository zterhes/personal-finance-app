import { useQuery } from "@tanstack/react-query";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/searchBar/SearchBar";
import { fetchTransactions } from "../state/transactions";
import TransactionComponent from "../components/TransactionComponent";

const Transactions = () => {
  const results = useQuery({
    queryKey: ["transactions", { userId: "1" }],
    queryFn: fetchTransactions,
  });

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
        {results.data?.map((transaction, index) => (
          <TransactionComponent key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
