import { useGlobalContextProvider } from "@/utils/contextAPI";
import {
  faDiagramProject,
  faLayerGroup,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

interface StatisticsCard {
  text: string;
  numbers: number;
  icon: any;
}
const Statistics = () => {
  const StatisticsCard: StatisticsCard[] = [
    { text: "Total Projects", numbers: 15, icon: faDiagramProject },
    { text: "Tasks Completed", numbers: 30, icon: faListCheck },
    { text: "Categories", numbers: 3, icon: faLayerGroup },
  ];

  const { isDark } = useGlobalContextProvider();
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentWidth]);

  console.log(currentWidth);

  return (
    <div
      className={`${
        isDark ? "bg-blackColorDark" : "bg-white"
      } m-5 rounded-lg p-8 grid grid-cols-3 gap-4`}
    >
      {StatisticsCard.map((singleCard, cardIndex) => (
        <div key={cardIndex}>
          <Card singleCard={singleCard} currentWidth={currentWidth} />
        </div>
      ))}
    </div>
  );
};

const Card = ({
  singleCard,
  currentWidth,
}: {
  singleCard: StatisticsCard;
  currentWidth: number;
}) => {
  const { text, numbers, icon } = singleCard;
  return (
    <div
      className={`px-4 p-3 rounded-md text-white bg-mainColor flex gap-12 items-center ${
        currentWidth < 1318 ? "gap-6" : "gap-11"
      }`}
    >
      <div
        className={`flex flex-col ${currentWidth < 750 ? "items-center" : ""}`}
      >
        <span className="font-bold text-3xl">{numbers}</span>
        <span
          className={`font-light text-[12px] ${
            currentWidth < 750 ? "items-center" : ""
          }`}
        >
          {text}
        </span>
      </div>
      <div
        className={`h-12 w-12 rounded-full bg-white flex items-center justify-center ${
          currentWidth < 750 ? "hidden" : ""
        }`}
      >
        <FontAwesomeIcon icon={icon} className="p-7 text-mainColor" />
      </div>
    </div>
  );
};

export default Statistics;
