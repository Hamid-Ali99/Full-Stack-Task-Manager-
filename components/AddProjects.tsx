import { useEffect, useState } from "react";
import { faClose, faPodcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconsWindow from "./IconsWindow";
import { useGlobalContextProvider } from "@/utils/contextAPI";

const AddProjects = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [innerWidth, setInnerWidth] = useState(590);
  const { projectWindow, isDark, IconBox } = useGlobalContextProvider();
  const { openNewProjectBox, setOpenNewProjectBox } = projectWindow;
  const { openIconBox, setOpenIconBox } = IconBox;

  const [parrentWidth, setParrentWidth] = useState(0);
  const [parrentHeight, setParrentHeight] = useState(0);

  const childHeight = 400;

  useEffect(() => {
    const calculatePosition = () => {
      const left = (parrentWidth - innerWidth) / 2;
      const top = (parrentHeight - childHeight) / 2;
      setPosition({ left, top });
    };
    // call the function when the component is first loaded
    setParrentWidth(window.innerWidth);
    setParrentHeight(window.innerHeight);
    calculatePosition();

    // every time the window size changes, call the function again
    const handleResize = () => {
      calculatePosition();
      setParrentWidth(window.innerWidth);
      setParrentHeight(window.innerHeight);
    };

    if (parrentWidth < 600) {
      setInnerWidth(340);
    } else {
      setInnerWidth(570);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth, window.innerHeight, openNewProjectBox, parrentWidth]);

  console.log(innerWidth);

  return (
    <div
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
        width: `${innerWidth}px`,
        height: `${childHeight}px`,
      }}
      className={`${
        openNewProjectBox ? "visible opacity-100" : "invisible opacity-0"
      } transition-all fixed p-6 py-7 rounded-l flex flex-col z-50 shadow-md top-8 ${
        isDark ? "bg-blackColorDark" : "bg-white"
      }`}
    >
      {/* Add new project header */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[20px] mt-1">Add new Project</span>
        <FontAwesomeIcon
          style={{
            pointerEvents: `${openIconBox ? "none" : "all"}`,
          }}
          onClick={() => {
            setOpenNewProjectBox(false);
            setParrentWidth(0);
          }}
          icon={faClose}
          className="opacity-30 cursor-pointer"
        />
      </div>

      <IconsWindow />
      {/* Project name input and icon */}
      <div className="flex flex-col gap-2 mt-10 px-3">
        <span className="text-sm opacity-80">project name</span>
        <div className="flex items-center justify-between gap-4">
          <input
            placeholder="Type a name for your project..."
            className={`border border-gray-200 w-full outline-none p-3 rounded-md text-[12px] ${
              isDark ? "bg-blackColorDark" : "bg-white"
            }`}
          />
          <FontAwesomeIcon
            icon={faPodcast}
            height={15}
            width={20}
            className="bg-mainColor text-white p-3 mt-[1px] rounded-md"
            onClick={() => setOpenIconBox(true)}
          />
        </div>
      </div>

      {/* categories select option */}
      <div className="flex flex-col gap-2 mx-3 mt-8">
        <span className="text-sm opacity-80">Categories</span>
        <select
          className={`p-3 text-[13px] outline-none border border-gray-200 rounded-md ${
            isDark ? "bg-blackColorDark" : "bg-white opacity-60"
          }`}
        >
          <option value="">Select a category...</option>
          <option value="option2">Category 1</option>
          <option value="option3">Category 2</option>
        </select>
      </div>

      {/* add project button */}
      <div className="text-center mx-2 mt-10">
        <button className="bg-mainColor text-white w-full p-3 rounded-md text-sm">
          Add a project
        </button>
      </div>
    </div>
  );
};

export default AddProjects;
