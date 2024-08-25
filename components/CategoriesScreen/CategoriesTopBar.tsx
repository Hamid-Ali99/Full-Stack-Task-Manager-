import { useGlobalContextProvider } from "@/utils/contextAPI";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CategoriesTopBar = () => {
  const { sideBar, mobileView, isDark } = useGlobalContextProvider();
  const { openSideBar, setOpenSideBar } = sideBar;
  const { isMobileView } = mobileView;

  return (
    <div
      className={`${
        isDark ? "bg-blackColor" : "bg-white"
      } p-8 pt-12 flex justify-between items-center`}
    >
      {/* Project text */}
      <div className="flex items-center gap-7">
        <span className="flex flex-col">
          <span className="font-bold text-2xl">Categories</span>
          <p className="font-light text-[12px]">3 Categories</p>
        </span>
        <button className="text-[12px] bg-mainColor flex items-center gap-1 p-2 px-4 text-white rounded-md">
          <FontAwesomeIcon
            icon={faPlus}
            className="font-bold"
            height={10}
            width={10}
          />
          <p>Add New</p>
        </button>
      </div>
      <div className={`${isMobileView ? "block" : "hidden"}`}>
        <FontAwesomeIcon
          icon={faBars}
          className={`cursor-pointer ${
            isDark ? "text-white" : "text-gray-800"
          } `}
          height={20}
          width={20}
          onClick={() => {
            setOpenSideBar(!openSideBar);
            console.log("Toggled sidebar:", !openSideBar);
          }}
        />
      </div>
    </div>
  );
};

export default CategoriesTopBar;
