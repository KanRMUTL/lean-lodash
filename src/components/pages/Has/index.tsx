import React from "react";
import { User } from "../../../types/index";
import _ from "lodash";

const Has = () => {
  const original: User = {
    name: "Kan",
    lastname: "Lws",
    age: 24,
    address: "Lamphun",
  };

  console.log(_.has(original, "age"));
  console.log(_.has(original, "lastname"));
  console.log(_.has(original, "firstname"));
  console.log(_.has(original, "address.homeNo"));

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <div style={{ width: "50%" }}>
        <h4>Result at the console</h4>
      </div>
    </div>
  );
};

export default Has;
