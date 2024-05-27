import { useGlobalContextProvider } from "@/utils/contextAPI";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  const { isDark, sideBar } = useGlobalContextProvider();
  const [openSearchBar, setopenSearchBar] = useState(false);
  const { openSideBar, setOpenSideBar } = sideBar;

  const handleClickIcon = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation();

    setOpenSideBar(true);
  };
  return (
    <div
      className={`p-8 pt-12 flex items-center justify-between ${
        isDark ? "bg-blackColor" : "bg-white"
      }`}
    >
      {/* Welcome Back Part */}
      <div className="flex gap-7 items-center">
        {/* Icon Bar */}
        <div className="flex md:hidden cursor-pointer">
          <FontAwesomeIcon
            icon={faBars}
            height={14}
            width={14}
            onClick={(e) => handleClickIcon(e)}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-2xl">
            Hello, <span className="font-light">Ali</span>
          </span>
          <span className="text-[12px] font-light">Welcome back</span>
        </div>
      </div>

      {/* Search bar */}
      {openSearchBar && <SearchBar />}

      {/* Profile */}
      <div className="w-[130px] flex items-center justify-between">
        <FontAwesomeIcon
          icon={openSearchBar ? faClose : faSearch}
          onClick={() => setopenSearchBar((prev) => !prev)}
          className={`${
            isDark ? "text-white" : "text-gray-500"
          } cursor-pointer`}
          height={20}
          width={20}
        />
        <div className="flex gap-2 items-center">
          <div className="bg-mainColor h-11 w-11 rounded-md"></div>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`${
              isDark ? "text-white" : "text-gray-500"
            } cursor-pointer font-bold`}
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
