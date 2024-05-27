"use client";

import Categories from "@/components/CategoriesScreen/Categories";
import Dashboard from "@/components/Dashboard/Dashboard";
import Projects from "@/components/ProjectScreen/Projects";
import Sidebar from "@/components/Sidebar";
import { useGlobalContextProvider } from "@/utils/contextAPI";
import React from "react";

const DashboardPage = () => {
  const { isDark, sideBar, dashboardItems } = useGlobalContextProvider();
  const { openSideBar, setOpenSideBar } = sideBar;
  const { menuItems, setMenuItems } = dashboardItems;
  const selectedItem = menuItems.find((item) => item.isSelected);

  let selectedComponent = null;
  switch (selectedItem?.name) {
    case "Dashboard":
      selectedComponent = <Dashboard />;
      break;
    case "Projects":
      selectedComponent = <Projects />;
      break;
    case "Categories":
      selectedComponent = <Categories />;
      break;
    default:
      break;
  }
  return (
    <div
      className={`poppins flex w-full h-auto relative ${
        isDark ? "dark-mode" : "light-mode"
      }`}
    >
      <Sidebar />
      {selectedComponent}
      <div
        className={`w-full h-full fixed bg-black z-[9] opacity-20 ${
          openSideBar ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default DashboardPage;
