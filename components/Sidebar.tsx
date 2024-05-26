"use client";
import React, { useState } from "react";

import {
  faArrowRight,
  faArrowRightFromBracket,
  faBarsProgress,
  faDashboard,
  faFeather,
  faLayerGroup,
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
  const { isDark, setIsDark } = useGlobalContextProvider();

  const [menuItems, setMenuItems] = useState([
    { name: "Dashboard", icon: faDashboard, isSelected: true },
    { name: "Projects", icon: faBarsProgress, isSelected: false },
    { name: "Categories", icon: faLayerGroup, isSelected: false },
  ]);

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
    <div className="poppins border border-gray-300 w-[300px] p-6 py-16 flex flex-col gap-3 justify-between">
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
