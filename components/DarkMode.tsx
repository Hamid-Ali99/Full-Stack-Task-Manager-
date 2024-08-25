import { useGlobalContextProvider } from "@/utils/contextAPI";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DarkMode = () => {
  const { isDark, setIsDark } = useGlobalContextProvider();
  // console.log(isDark);

  return (
    <div>
      <div
        className={`${
          isDark ? "bg-mainColor" : "border bg-transparent"
        } rounded-3xl border-gray-300 h-[33px] w-[59px] flex relative`}
      >
        <div
          onClick={() => {
            setIsDark(false);
          }}
          className="bg-red-500 h-full w-1/2 opacity-0"
        ></div>
        <div
          onClick={() => {
            setIsDark(true);
          }}
          className="bg-blue-500 h-full w-1/2 opacity-0"
        ></div>
        <div
          style={{ width: "22px" }}
          className={`rounded-full h-[23px] w-[22px] top-[5px] ${
            isDark
              ? "bg-white translate-x-[34px]"
              : "bg-slate-300 translate-x-[4px]"
          } w-[35px] absolute transition-all flex items-center justify-center`}
        >
          <FontAwesomeIcon
            icon={isDark ? faMoon : faSun}
            height={12}
            width={12}
            className={`${isDark ? "text-mainColor" : "text-white"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
