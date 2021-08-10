import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import paths from "../../route/paths";
import { useToggleSidebar } from "../context/SidebarContext";

const MenuList = () => {
  const toggleSidebar = useToggleSidebar();
  return (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={() => toggleSidebar(false)}
    >
      <List>
        {paths.map((path, index) => (
          <ListItem
            component={Link}
            button
            key={index}
            to={path.path}
            onClick={() => toggleSidebar(false)}
          >
            <ListItemText>{path.label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuList;
