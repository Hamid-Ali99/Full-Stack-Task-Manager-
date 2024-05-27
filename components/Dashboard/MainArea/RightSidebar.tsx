import { useGlobalContextProvider } from "@/utils/contextAPI";
import React from "react";
import LatestProjects from "./LatestProjects";

const RightSidebar = () => {
  const { isDark, mobileView } = useGlobalContextProvider();
  const { isMobileView } = mobileView;

  return (
    <div className={`${isMobileView ? "" : "w-4/12"} p-4 flex gap-4 flex-col`}>
      <OverAllProgress />
      <LatestProjects />
    </div>
  );
};

const OverAllProgress = () => {
  const { isDark, setIsDark } = useGlobalContextProvider();
  return (
    <div
      className={`mt-1 rounded-md p-4 h-64 flex gap-8 flex-col items-center justify-center ${
        isDark ? "bg-blackColorDark" : "bg-white"
      }`}
    >
      <span className="font-semibold text-lg">Overall Progress</span>
      <div className="bg-mainColor w-[120px] h-[120px] rounded-full flex flex-col justify-center items-center">
        <span className="font-bold text-3xl text-white">76%</span>
        <span className="font-light text-[11px] text-white">Progress</span>
      </div>
    </div>
  );
};

export default RightSidebar;
