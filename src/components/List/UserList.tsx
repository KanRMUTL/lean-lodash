import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { User } from "../../types/index";
interface Props {
  users: User[];
}

const NormalList = ({ users }: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <List>
        {users.map((user, index) => (
          <ListItem button key={index}>
            <ListItemText
              primary={`${user.name}  ${user.lastname} => Age : ${user.age}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NormalList;
