import React, { useState } from "react";
import UserList from "../../List/UserList";
import { User } from "../../../types/index";
import _ from "lodash";

const ForInRight = () => {
  const original: User[] = [
    {
      name: "Kan",
      lastname: "Lowongsa",
      age: 24,
      address: "Lamphun",
    },
    {
      name: "Aom",
      lastname: "Tww",
      age: 24,
      address: "CNX",
    },
    {
      name: "Winner",
      lastname: "Tww",
      age: 24,
      address: "CNX",
    },
  ];
  const [result] = useState(
    _.forInRight(original, (value, key) => {
      console.log("this is key of list: " + key);
    })
  );
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <div style={{ width: "50%" }}>
        <h4>Original</h4>
        <UserList users={original} />
      </div>
    </div>
  );
};

export default ForInRight;
