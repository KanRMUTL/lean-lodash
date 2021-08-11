import React, { useState } from "react";
import NormalList from "../../List/NormalList";
import _ from "lodash";

const Drop = () => {
  const original = ["Water", "Soda", "Banana", "Orange", "juice"];
  const [result1] = useState(_.dropRight(original));
  const [result2] = useState(_.dropRight(original, 3));

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <div style={{ width: "33%" }}>
        <h4>Original</h4>
        <NormalList lists={original} />
      </div>
      <div style={{ width: "33%" }}>
        <h4>After Drop without amount</h4>
        <NormalList lists={result1} />
      </div>
      <div style={{ width: "33%" }}>
        <h4>After Drop with amount</h4>
        <NormalList lists={result2} />
      </div>
    </div>
  );
};

export default Drop;
