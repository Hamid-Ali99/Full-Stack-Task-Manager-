"use client";

import Dashboard from "@/components/Dashboard/Dashboard";
import Sidebar from "@/components/Sidebar";
import { useGlobalContextProvider } from "@/utils/contextAPI";
import React from "react";

const DashboardPage = () => {
  const { isDark, setIsDark } = useGlobalContextProvider();
  return (
    <div
      className={`poppins flex w-full h-screen ${
        isDark ? "dark-mode" : "light-mode"
      }`}
    >
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
