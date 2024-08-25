"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  faArrowRightFromBracket,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "./DarkMode";
import { useGlobalContextProvider } from "@/utils/contextAPI";
interface menuItems {
  name: string;
  icon: any;
  isSelected: boolean;
}
const Sidebar = () => {
  const { isDark, sideBar, mobileView, dashboardItems } =
    useGlobalContextProvider();
  const { openSideBar, setOpenSideBar } = sideBar;
  const { isMobileView } = mobileView;
  const sideBarRef = useRef<HTMLDivElement>(null);
  const { menuItems, setMenuItems } = dashboardItems;

  useEffect(() => {
    console.log("Sidebar state openSideBar:", openSideBar);
  }, [openSideBar]);

  useEffect(() => {
    const handleResize = () => {
      setOpenSideBar(false);
    };

    const handleOutSideClick = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event?.target as Node)
      ) {
        setOpenSideBar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleOutSideClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleOutSideClick);
    };
  });

  // console.log(openSideBar);

  function updateItemSelection(IndexItem: number) {
    const copyMenuItems = menuItems.map((singleMenuItem, index) => {
      if (IndexItem === index) {
        return { ...singleMenuItem, isSelected: true };
      }

      return { ...singleMenuItem, isSelected: false };
    });

    setMenuItems(copyMenuItems);
  }

  return (
    <div
      ref={sideBarRef}
      className={` ${
        openSideBar ? "flex absolute h-full w-[280px]" : "flex"
      } poppins z-10 shadow-lg flex flex-col gap-32 w-[330px] p-8 pt-12  ${
        isDark ? "bg-blackColorDark" : "bg-white"
      } ${isMobileView ? (!openSideBar ? "hidden" : "flex") : ""}`}
    >
      {/* logo */}
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon
          icon={faFeather}
          className="bg-mainColor p-3 text-sm h-[30px] text-white rounded-md"
        />
        <span className="text-2xl font-light">
          <span className="font-bold text-mainColor">Taskify</span> Hub
        </span>
      </div>
      {/* menu */}
      <div className="flex text-[15px] flex-col gap-3 w-[182px] h-1/3 pl-5">
        {menuItems.map((menuItem, menuItemIndex) => (
          <div
            key={menuItemIndex}
            onClick={() => updateItemSelection(menuItemIndex)}
            className={`${
              menuItem.isSelected ? "bg-mainColor" : "bg-transparent"
            } rounded-md p-3 flex items-center gap-3 select-none cursor-pointer hover:border-mainColor transition-all border border-gray-200`}
          >
            <FontAwesomeIcon
              icon={menuItem.icon}
              height={20}
              width={20}
              className={`${
                menuItem.isSelected ? "text-white" : "text-mainColor"
              }`}
            />
            <span
              className={`${
                menuItem.isSelected
                  ? "text-white"
                  : isDark
                  ? "text-white"
                  : "text-dark"
              }`}
            >
              {menuItem.name}
            </span>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="pl-5 cursor-pointer p-3 select-none flex gap-8 flex-col">
        {/* log out btn */}
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            height={20}
            width={20}
            className="text-mainColor"
          />
          <span className="text-[15px]">Log out</span>
        </div>
        {/* Dark Mode */}
        <DarkMode />
      </div>
    </div>
  );
};

export default Sidebar;
