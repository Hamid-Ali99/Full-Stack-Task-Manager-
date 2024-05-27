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

  return (
    <GlobalContext.Provider
      value={{
        isDark,
        setIsDark,
        sideBar: { openSideBar, setOpenSideBar },
        mobileView: { isMobileView, setIsMobileView },
        dashboardItems: { menuItems, setMenuItems },
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
