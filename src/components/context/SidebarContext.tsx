import React, { useContext, createContext, useState } from "react";

const SidebarActive = createContext(true);
const ToggleSidebar = createContext((active: boolean) => undefined);

interface Props {
  children: React.ReactNode;
}

export const useSideBarActive = () => useContext(SidebarActive);
export const useToggleSidebar = () => useContext(ToggleSidebar);

const SideBarActiveProvider = ({ children }: Props) => {
  const [active, setActive] = useState(true);

  const toggleSidebar = (status: boolean) => {
    setActive(status);
    return undefined;
  };

  return (
    <SidebarActive.Provider value={active}>
      <ToggleSidebar.Provider value={toggleSidebar}>
        {children}
      </ToggleSidebar.Provider>
    </SidebarActive.Provider>
  );
};

export default SideBarActiveProvider;
