import { useQuery } from "@tanstack/react-query";
import SearchTextInput from "./SearchTextInput";
import { fetchBudgetNames } from "../../state/transactions";
import { useState } from "react";
import MySelect from "../MySelect";

const SearchBar = () => {
  const { data } = useQuery({
    queryKey: ["budgetNames"],
    queryFn: fetchBudgetNames,
  });

  const [sortValue, setSortValue] = useState("latest");
  const [categoryValue, setCategoryValue] = useState("all");
  console.log("sortValue", sortValue);
  console.log("categoryValue", categoryValue);

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
        <MySelect
          label="Sort by"
          sortValue={sortValue}
          setSortValue={setSortValue}
          sortByValues={sortByValues}
          buttonWidth="113px"
        />
        <MySelect
          label="Category"
          sortValue={categoryValue}
          setSortValue={setCategoryValue}
          sortByValues={data || []}
          buttonWidth="177px"
        />
      </div>
    </div>
  );
};

export default SearchBar;
