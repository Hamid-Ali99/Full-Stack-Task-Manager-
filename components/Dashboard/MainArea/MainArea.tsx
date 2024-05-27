import { useGlobalContextProvider } from "@/utils/contextAPI";
import React from "react";
import Statistics from "./Statistics";
import RightSidebar from "./RightSidebar";
import ChatBarProgress from "./ChatBarProgress";
import RecentTasks from "./RecentTasks";

const MainArea = () => {
  const { isDark, mobileView } = useGlobalContextProvider();
  const { isMobileView, setIsMobileView } = mobileView;
  return (
    <div
      className={`${isDark ? "bg-blackColor" : "bg-slate-50"} flex gap-3 ${
        isMobileView ? "flex-col" : "flex-row"
      }`}
    >
      <div className={`${isMobileView ? "" : "w-8/12"} `}>
        <Statistics />
        <ChatBarProgress />
        <RecentTasks />
      </div>
      <RightSidebar />
    </div>
  );
};

export default MainArea;
