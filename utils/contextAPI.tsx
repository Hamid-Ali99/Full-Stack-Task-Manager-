"use client";

import { createContext, useContext, useEffect, useState } from "react";

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
});

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

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
