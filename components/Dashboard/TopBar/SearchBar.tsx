import { useGlobalContextProvider } from "@/utils/contextAPI";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const SearchBar = () => {
  const { isDark, setIsDark } = useGlobalContextProvider();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-1/3 flex gap-2 items-center border p-3 rounded-md">
      <FontAwesomeIcon
        icon={faSearch}
        className={`${isDark ? "text-white" : "text-gray-500"} `}
        height={20}
        width={20}
      />
      <input
        className={`outline-none text-[14px] font-light w-full ${
          isDark ? "bg-blackColor" : "bg-white"
        }`}
        ref={inputRef}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
