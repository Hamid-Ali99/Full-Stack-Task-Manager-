import React, { useEffect, useState } from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGlobalContextProvider } from "@/utils/contextAPI";

const CategoriesArea = () => {
  const { isDark } = useGlobalContextProvider();
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setCurrentWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentWidth]);

  return (
    <div
      className={`${isDark ? "bg-blackColor" : "bg-slate-50"} p-8 h-[870px]`}
    >
      <div
        className={`${
          isDark ? "bg-blackColorDark" : "bg-white"
        } rounded-md p-4 py-5 flex flex-col gap-4`}
      >
        <Categorycard />
        <Categorycard />
        <Categorycard />
        <Categorycard />
      </div>
    </div>
  );
};

const Categorycard = () => {
  const { isDark, dropDown } = useGlobalContextProvider();
  const { openDropDown, setOpenDropDown, setDropDownPosition } = dropDown;

  const handleClickedThreeDots = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event) {
      event.stopPropagation();
    }

    const xPosition = event.clientX;
    const yPosition = event.clientY;

    setDropDownPosition({ x: xPosition, y: yPosition });
    setOpenDropDown(true);
  };

  return (
    <div
      className={`${
        isDark ? "bg-blackColor" : "bg-slate-50"
      } p-4 flex px-5 rounded-md text-[14px] items-center justify-between`}
    >
      <div className="flex flex-col">
        <span className="font-semibold">Category 1</span>
        <span className="text-[12px] text-gray-400">2 Projects</span>
      </div>
      <div
        onClick={(e) => handleClickedThreeDots(e)}
        className="flex gap-4 hover:bg-gray-200 h-6 w-6 items-center justify-center rounded-full"
      >
        <FontAwesomeIcon
          icon={faEllipsis}
          height={15}
          width={15}
          className="text-gray-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CategoriesArea;
