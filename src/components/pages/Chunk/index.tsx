import React, { useState } from "react";
import NormalList from "../../List/NormalList";
import _ from "lodash";

const Chunk = () => {
  const [original] = useState(["Water", "Soda", "Banana", "Orange", "juice"]);
  const [result] = useState(_.chunk(original, 3));
  console.log(result);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <div style={{ width: "50%" }}>
        <h4>Chunk</h4>
        <NormalList lists={original} />
      </div>
    </div>
  );
};

export default Chunk;
