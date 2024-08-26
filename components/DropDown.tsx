import { useEffect, useRef, useState } from "react";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGlobalContextProvider } from "@/utils/contextAPI";

interface dropMenuItem {
  name: string;
  icon: any;
}
const DropDown = () => {
  const dropDownMenuItems: dropMenuItem[] = [
    {
      name: "Edit",
      icon: faPencil,
    },
    {
      name: "Remove",
      icon: faTrash,
    },
  ];

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { isDark, dropDown } = useGlobalContextProvider();
  const { openDropDown, setOpenDropDown, dropDownPosition } = dropDown;

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };
  const handleMouseLeave = (index: number) => {
    setHoveredItem(null);
  };

  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event?.target as Node)
      ) {
        setOpenDropDown(false);
      }
    };

    document.addEventListener("click", handleOutSideClick);
    return () => document.removeEventListener("click", handleOutSideClick);
  }, [openDropDown]);

  return (
    <div
      ref={dropDownRef}
      style={{
        left: dropDownPosition.x - 160,
        top: dropDownPosition.y + 20,
      }}
      className={`p-3 w-40 fixed top-[120px] right-[120px] z-50 shadow-md flex flex-col rounded-lg gap-3 text-[13px] ${
        isDark ? "bg-blackColorDark" : "bg-white"
      } ${openDropDown ? "fixed" : "hidden"}`}
    >
      {dropDownMenuItems.map((menuItem, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className={`flex items-center border border-gray-200 gap-2 rounded-md p-3 select-none transition-all cursor-pointer`}
          style={{
            backgroundColor:
              index === hoveredItem ? "rgb(62, 99, 255)" : "transparent",
          }}
        >
          <FontAwesomeIcon
            icon={menuItem.icon}
            className="size-4"
            style={{
              color: index === hoveredItem ? "white" : "rgb(62, 99, 255)",
            }}
          />
          <div
            style={{
              color:
                index === hoveredItem
                  ? "white"
                  : `${isDark ? "white" : "black"}`,
            }}
          >
            {menuItem.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
