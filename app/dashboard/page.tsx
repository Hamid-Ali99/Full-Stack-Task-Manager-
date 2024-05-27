"use client";

import Dashboard from "@/components/Dashboard/Dashboard";
import Sidebar from "@/components/Sidebar";
import { useGlobalContextProvider } from "@/utils/contextAPI";
import React from "react";

const DashboardPage = () => {
  const { isDark, sideBar } = useGlobalContextProvider();
  const { openSideBar, setOpenSideBar } = sideBar;
  return (
    <div
      className={`poppins flex w-full h-auto relative ${
        isDark ? "dark-mode" : "light-mode"
      }`}
    >
      <Sidebar />
      <Dashboard />
      <div
        className={`w-full h-full fixed bg-black z-[9] opacity-20 ${
          openSideBar ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default DashboardPage;
