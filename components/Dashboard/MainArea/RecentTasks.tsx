import { useGlobalContextProvider } from "@/utils/contextAPI";
import React, { useEffect, useState } from "react";

interface recentTasks {
  _id: number;
  taskName: string;
  createdAt: string;
  projectName: string;
  status: string;
}

const recentTasksArray: recentTasks[] = [
  // {
  //   _id: 1,
  //   taskName: "Coding",
  //   createdAt: "30 April 2024",
  //   projectName: "Project 1",
  //   status: "Pending",
  // },
  // {
  //   _id: 2,
  //   taskName: "Designing",
  //   createdAt: "30 April 2024",
  //   projectName: "Project 2",
  //   status: "Completed",
  // },
  // {
  //   _id: 3,
  //   taskName: "dev",
  //   createdAt: "30 April 2024",
  //   projectName: "Project 3",
  //   status: "Pending",
  // },
];

const RecentTasks = () => {
  const { isDark } = useGlobalContextProvider();

  return (
    <div
      className={`p-4 rounded-md py-8 m-5 ${
        isDark ? "bg-blackColorDark" : "bg-white"
      }`}
    >
      <div className="font-semibold text-lg ml-5 mb-12">Recent Tasks</div>
      {recentTasksArray.length > 0 ? (
        recentTasksArray.map((recentTask, index) => (
          <div key={index}>
            <TaskCard recentTaskProp={recentTask} />
          </div>
        ))
      ) : (
        <EmptyTasksPlaceholder />
      )}
    </div>
  );
};

const TaskCard = ({ recentTaskProp }: { recentTaskProp: recentTasks }) => {
  const { isDark } = useGlobalContextProvider();
  const { taskName, createdAt, projectName, status } = recentTaskProp;

  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentWidth]);

  return (
    <div
      className={`${
        isDark ? "bg-blackColor" : "bg-slate-50"
      } px-6 rounded-md m-5 grid grid-cols-4 items-center p-3 ${
        currentWidth < 613 ? "grid-cols-3 gap-3" : ""
      }`}
    >
      {/* Task Name */}
      <span className="font-semibold align-middle">{taskName}</span>
      {/* Task creation */}
      <div
        className={`flex flex-col gap-1 ${currentWidth < 613 ? "hidden" : ""}`}
      >
        <span
          className={`font-semibold text-[14px] ${
            isDark ? "text-white" : "text-gray-500"
          }`}
        >
          Created At
        </span>
        <span className="font-medium text-mainColor text-[15px]">
          {createdAt}
        </span>
      </div>
      {/* Project */}
      <div className="flex flex-col gap-1">
        <span
          className={`font-semibold text-[14px] ${
            isDark ? "text-white" : "text-gray-500"
          }`}
        >
          Project In
        </span>
        <span className="font-medium text-mainColor text-[15px]">
          {projectName}
        </span>
      </div>
      {/* Status */}
      <div className="flex flex-col gap-1">
        <span
          className={`font-semibold text-[14px] ${
            isDark ? "text-white" : "text-gray-500"
          }`}
        >
          Status
        </span>
        <span className="font-medium text-mainColor text-[15px]">{status}</span>
      </div>
    </div>
  );
};

const EmptyTasksPlaceholder = () => {
  return (
    <div className="p-1 gap-5 flex justify-center items-center">
      <div>
        <p className="text-gray-400 text-center text-[13px]">
          There are no tasks at this moment!
        </p>
      </div>
    </div>
  );
};

export default RecentTasks;
