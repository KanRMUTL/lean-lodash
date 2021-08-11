import React, { useState } from "react";
import NormalList from "../../List/NormalList";
import _ from "lodash";

const Drop = () => {
  const original = [
    "Water",
    "Soda",
    "Banana",
    "Orange",
    "juice",
    "Water",
    "Banana",
  ];
  const [result] = useState(_.uniq(original));

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <div style={{ width: "50%" }}>
        <h4>Original</h4>
        <NormalList lists={original} />
      </div>
      <div style={{ width: "50%" }}>
        <h4>After Remove</h4>
        <NormalList lists={result} />
      </div>
    </div>
  );
};

export default Drop;
