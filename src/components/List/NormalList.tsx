import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

interface Props {
  lists: any[];
}

const NormalList = ({ lists }: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <List>
        {lists.map((list, index) => (
          <ListItem button key={index}>
            <ListItemText primary={list} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NormalList;
