import { IoSearch } from "react-icons/io5";

const AppSearchInput = ({ variant = "white", placeholder }) => {
  return (
    <div
      className={`w-[30%] mx-auto flex justify-between items-center border rounded-full px-5 ${
        variant === "white"
          ? "text-white border-gray-200"
          : "text-gray-800 border-gray-600"
      }`}
    >
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="bg-transparent outline-none w-full py-2"
      />
      <IoSearch
        className={`text-xl cursor-pointer ${
          variant === "white" ? "text-white" : "text-gray-800"
        }`}
      />
    </div>
  );
};

export default AppSearchInput;
