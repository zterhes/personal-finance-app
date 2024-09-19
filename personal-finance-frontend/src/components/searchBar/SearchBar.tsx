import SearchTextInput from "./SearchTextInput";

const SearchBar = () => {
  return (
    <div className="h-[45px] w-full flex justify-between">
      <SearchTextInput />
      <div className="flex">
        <div className="bg-black w-[169px]"> Hello</div>
        <div className="bg-green w-[245px]"> hello</div>
      </div>
    </div>
  );
};

export default SearchBar;
