import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const AppSearchInput = ({ variant = "white", placeholder, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`w-[30%] mx-auto flex justify-between items-center border rounded-full px-5 ${
        variant === "white"
          ? `text-black ${isFocused ? "border-blue-500" : "border-gray-400"}`
          : `text-gray-800 ${isFocused ? "border-blue-500" : "border-gray-800"}`
      }`}
    >
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="bg-transparent outline-none w-full py-2"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
      />
      <IoSearch
        className={`text-xl cursor-pointer ${
          variant === "white" ? "black" : "text-gray-800"
        }`}
      />
    </div>
  );
};

export default AppSearchInput;
