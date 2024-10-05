import searchIcon from "../../assets/icons/icon-search.svg";
const SearchTextInput = () => {
  return (
    <div className="flex h-[45px] w-[320px] px-250 py-150 border-beige-500 border rounded-lg">
      <input
        className="h-full w-full mr-200 text-beige-500"
        placeholder="Search transaction"
      />
      <button className="size-[16px]">
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

export default SearchTextInput;
