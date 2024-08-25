import { useGlobalContextProvider } from "@/utils/contextAPI";
import {
  faBarsProgress,
  faEllipsis,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectsArea = () => {
  const { isDark } = useGlobalContextProvider();

  return (
    <div
      className={`${isDark ? "bg-blackColor" : "bg-slate-50"} p-8 h-[870px]`}
    >
      <div
        className={`${
          isDark ? "bg-blackColorDark" : "bg-white"
        } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 rounded-md py-8`}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsArea;

const ProjectCard = () => {
  const { isDark } = useGlobalContextProvider();
  return (
    <div
      className={`${
        isDark ? "bg-blackColor" : "bg-slate-100"
      } w-full py-5 rounded-md p-4 text-sm flex flex-col gap-6 relative`}
    >
      {/* Three dots icon */}
      <div className="absolute right-3 text-center cursor-pointer p-1 rounded-full h-6 w-6 hover:bg-gray-200 transition-all">
        <FontAwesomeIcon
          icon={faEllipsis}
          className="text-gray-500"
          style={{ fontSize: "10px" }}
        />
      </div>
      {/* Project Name + Icon */}
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faProjectDiagram}
          className="bg-mainColor p-2 text-white rounded-full"
          style={{ fontSize: "12px" }}
        />
        <span>Project 1</span>
      </div>
      {/* Progress */}
      <div className="flex flex-col gap-2">
        <div
          className={`flex justify-between items-center text-[12px] ${
            isDark ? "text-white" : "text-gray-500"
          }`}
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faBarsProgress}
              style={{ fontSize: "12px" }}
            />
            <span>Progress</span>
          </div>
          <span>9/12</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-[5px] rounded-2xl bg-gray-400 overflow-hidden">
          <div className="w-1/2 h-full bg-mainColor rounded-r-lg"></div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap text-[12px] gap-2 mt-3">
        <div className="bg-mainColor p-1 rounded-md text-white px-3">
          Category 1
        </div>
        <div className="bg-mainColor p-1 rounded-md text-white px-3">
          Category 2
        </div>
      </div>
    </div>
  );
};
