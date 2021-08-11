import React, { useState } from "react";
import NormalList from "../../List/NormalList";
import _ from "lodash";

const Compace = () => {
  const original = [
    "Water",
    "Soda",
    false,
    undefined,
    null,
    0,
    "Banana",
    "Orange",
    "juice",
  ];
  const [result] = useState(_.difference(original));

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <div style={{ width: "50%" }}>
        <h4>Original</h4>
        <NormalList lists={original} />
      </div>
      <div style={{ width: "50%" }}>
        <h4>After Compact</h4>
        <NormalList lists={result} />
      </div>
    </div>
  );
};

export default Compace;
