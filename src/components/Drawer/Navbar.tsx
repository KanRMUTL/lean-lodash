import React from "react";
import { Drawer } from "@material-ui/core";
import MenuList from "./MenuList";
import { useSideBarActive } from "../context/SidebarContext";

const Navbar = () => {
  const active = useSideBarActive();
  return (
    <Drawer anchor="left" open={active}>
      <MenuList />
    </Drawer>
  );
};

export default Navbar;
