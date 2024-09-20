import { useQuery } from "@tanstack/react-query";
import Dropdown from "../Dropdown";
import SearchTextInput from "./SearchTextInput";
import { fetchBudgetNames } from "../../state/transactions";

const SearchBar = () => {
  const { data } = useQuery({
    queryKey: ["budgetNames"],
    queryFn: fetchBudgetNames,
  });

  const sortByValues: { title: string; logicalPlaceholder: string }[] = [
    {
      title: "Latest",
      logicalPlaceholder: "latest",
    },
    {
      title: "Oldest",
      logicalPlaceholder: "oldest",
    },
    {
      title: "A to Z",
      logicalPlaceholder: "aToz",
    },
    {
      title: "Z to A",
      logicalPlaceholder: "zToa",
    },
    {
      title: "Highest",
      logicalPlaceholder: "highest",
    },
    {
      title: "Lowest",
      logicalPlaceholder: "lowest",
    },
  ];

  return (
    <div className="h-[45px] w-full flex justify-between align-middle">
      <SearchTextInput />
      <div className="flex space-x-300">
        <Dropdown
          label="Sort by"
          placeholder="Latest"
          values={sortByValues}
          divWidth="w-[169px]"
          buttonWidth="113px"
        />
        <Dropdown
          label="Category"
          placeholder="All Transactions"
          values={
            data
              ? data.map((name) => ({ title: name, logicalPlaceholder: name }))
              : []
          }
          divWidth="w-[245px]"
          buttonWidth="177px"
        />
      </div>
    </div>
  );
};

export default SearchBar;
