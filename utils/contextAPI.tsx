"use client";

import {
  faBarsProgress,
  faDashboard,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface MenuItem {
  name: string;
  icon: any;
  isSelected: boolean;
}

interface dropDownPosition {
  x: number;
  y: number;
}

interface GlobalContext {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  sideBar: {
    openSideBar: boolean;
    setOpenSideBar: (openSideBar: boolean) => void;
  };
  mobileView: {
    isMobileView: boolean;
    setIsMobileView: (isMobileView: boolean) => void;
  };
  dashboardItems: {
    menuItems: MenuItem[];
    setMenuItems: Dispatch<SetStateAction<MenuItem[]>>;
  };
  projectWindow: {
    openNewProjectBox: boolean;
    setOpenNewProjectBox: (openNewProjectBox: boolean) => void;
  };
  IconBox: {
    openIconBox: boolean;
    setOpenIconBox: (openIconBox: boolean) => void;
  };
  dropDown: {
    openDropDown: boolean;
    setOpenDropDown: (openDropDown: boolean) => void;
    dropDownPosition: dropDownPosition;
    setDropDownPosition: Dispatch<SetStateAction<dropDownPosition>>;
  };
}

const GlobalContext = createContext<GlobalContext>({
  isDark: false,
  setIsDark: () => {},
  sideBar: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  mobileView: {
    isMobileView: false,
    setIsMobileView: () => {},
  },
  dashboardItems: {
    menuItems: [],
    setMenuItems: () => {},
  },
  projectWindow: {
    openNewProjectBox: false,
    setOpenNewProjectBox: () => {},
  },
  IconBox: {
    openIconBox: false,
    setOpenIconBox: () => {},
  },
  dropDown: {
    openDropDown: false,
    setOpenDropDown: () => {},
    dropDownPosition: { x: 0, y: 0 },
    setDropDownPosition: () => {},
  },
});

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { name: "Dashboard", icon: faDashboard, isSelected: true },
    { name: "Projects", icon: faBarsProgress, isSelected: false },
    { name: "Categories", icon: faLayerGroup, isSelected: false },
  ]);

  const [openNewProjectBox, setOpenNewProjectBox] = useState(false);
  const [openIconBox, setOpenIconBox] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1160);
    };

    // initail check
    handleResize();

    // event listener for window resize
    window.addEventListener("resize", handleResize);
    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // This will close the project window automatically when user selected new element in the sidebar
  useEffect(() => {
    if (openNewProjectBox || openIconBox || openDropDown) {
      setOpenNewProjectBox(false);
      setOpenIconBox(false);
      setOpenDropDown(false);
    }
  }, [menuItems]);

  return (
    <GlobalContext.Provider
      value={{
        isDark,
        setIsDark,
        sideBar: { openSideBar, setOpenSideBar },
        mobileView: { isMobileView, setIsMobileView },
        dashboardItems: { menuItems, setMenuItems },
        projectWindow: {
          openNewProjectBox,
          setOpenNewProjectBox,
        },
        IconBox: {
          openIconBox,
          setOpenIconBox,
        },
        dropDown: {
          openDropDown,
          setOpenDropDown,
          dropDownPosition,
          setDropDownPosition,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;
