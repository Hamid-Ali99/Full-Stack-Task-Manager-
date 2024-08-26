import { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGlobalContextProvider } from "@/utils/contextAPI";
import { iconsData } from "@/iconsData";

const IconsWindow = () => {
  const [allIcons, setAllIcons] = useState(iconsData);
  const { isDark, IconBox } = useGlobalContextProvider();
  const { openIconBox, setOpenIconBox } = IconBox;
  return (
    <div
      className={`w-full flex items-center justify-center absolute top-12 left-0 ${
        openIconBox ? "flex" : "hidden"
      } `}
    >
      <div
        className={`relative z-50 w-[400px] rounded-md p-4 flex flex-col border gap-6 shadow-md ${
          isDark ? "bg-blackColorDark text-white" : "bg-white text-black"
        }`}
      >
        <FontAwesomeIcon
          icon={faClose}
          onClick={() => setOpenIconBox(false)}
          height={20}
          width={20}
          className={`${
            isDark ? "bg-blackColorDark" : "bg-white"
          } absolute top-8 right-4 text-gray-300 cursor-pointer`}
        />
        <span className="font-bold text-lg bg-transparent mt-3">
          Choose Your Icon
        </span>
        <div className="border border-gray-200 p-5 flex flex-wrap gap-4 items-center rounded-md">
          {allIcons.map((icon, iconIndex) => (
            <FontAwesomeIcon
              key={iconIndex}
              icon={icon.faIcon}
              height={50}
              width={50}
              className={`border border-gray-200 rounded-md p-2 text-xl cursor-pointer hover:text-mainColor hover:border-mainColor ${
                icon.isSelected
                  ? "text-mainColor border-mainColor"
                  : `${isDark ? "text-white" : "text-black"}`
              }`}
            />
          ))}
        </div>
        <div className="flex justify-end my-2">
          <button className="bg-mainColor text-white select-none rounded-md p-2 text-[13px] px-8">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconsWindow;
