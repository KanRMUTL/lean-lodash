import React from "react";
import { Drawer } from "@material-ui/core";
import MenuList from "./MenuList";
import { useSideBarActive, useToggleSidebar } from "../context/SidebarContext";
import Dim from "./Dim";

const Navbar = () => {
  const active = useSideBarActive();
  const toggleSidebar = useToggleSidebar();
  return (
    <Drawer anchor="left" open={active}>
      <MenuList />
      <Dim onClick={() => toggleSidebar(false)} />
    </Drawer>
  );
};

export default Navbar;
