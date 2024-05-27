import { useGlobalContextProvider } from "@/utils/contextAPI";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

interface TaskData {
  day: string;
  tasksDone: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any;
  label?: string | number;
}
const ChatBarProgress = () => {
  const [mockData, setMockData] = useState<TaskData[]>([]);
  const { isDark } = useGlobalContextProvider();
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const data: TaskData[] = [
      { day: "Monday", tasksDone: 5 },
      { day: "Tuesday", tasksDone: 14 },
      { day: "Wednesday", tasksDone: 3 },
      { day: "Thursday", tasksDone: 6 },
      { day: "Friday", tasksDone: 7 },
    ];

    setMockData(data);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentWidth]);

  //   custom tooltip component
  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className={`${
            isDark ? "bg-blackColor" : "bg-white"
          } p-4 rounded-md shadow-sm py-4`}
        >
          <p className="flex gap-2">
            <span className="font-bold text-mainColor">{payload[0].value}</span>
            <span className={`${isDark ? "text-white" : "text-black"}`}>
              Tasks Done
            </span>
          </p>
        </div>
      );
    }

    return null;
  };

  //   Custom bar shape Functions with rounded corners
  const RoundedBar = (props: any) => {
    const { x, y, width, height } = props;

    // define the radius for rounded corners
    const radius = 3;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={radius}
          ry={radius}
          fill="rgb(62, 99, 255)"
        />
      </g>
    );
  };

  return (
    <div
      className={`${
        isDark ? "bg-blackColorDark" : "bg-white"
      } p-6 py-8 m-5 flex gap-12 flex-col rounded-lg`}
    >
      <div className="font-semibold text-lg ml-5">Daily Progress</div>
      <div className={`flex ${currentWidth < 1358 ? "justify-center" : ""}`}>
        <BarChart
          width={currentWidth < 1358 ? 480 : 600}
          height={300}
          data={mockData}
        >
          <CartesianGrid stroke="transparent" />
          <XAxis
            dataKey="day"
            tick={{
              fill: `${isDark ? "white" : "black"}`,
              fontSize: `${currentWidth < 1318 ? 13 : 16}`,
            }}
          />
          <YAxis
            tick={{
              fill: `${isDark ? "white" : "black"}`,
              fontSize: `${currentWidth < 1318 ? 13 : 16}`,
            }}
          />
          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="tasksDone"
            fill="rgb(62, 99, 255)"
            background={{ fill: "transparent" }}
            barSize={50}
            shape={<RoundedBar />}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default ChatBarProgress;
