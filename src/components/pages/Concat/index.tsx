import React, { useState } from "react";
import NormalList from "../../List/NormalList";
import _ from "lodash";

const Concat = () => {
  const [original] = useState(["Water", "Soda", "Banana", "Orange", "Juse"]);
  const toConcat = ["New string", 10, "Last concat"];
  const [result] = useState(_.concat(original, toConcat));

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <div style={{ width: "33%" }}>
        <h4>Chunk</h4>
        <NormalList lists={original} />
      </div>
      <div style={{ width: "33%" }}>
        <h4>To Concat</h4>
        <NormalList lists={toConcat} />
      </div>
      <div style={{ width: "33%" }}>
        <h4>After Concat</h4>
        <NormalList lists={result} />
      </div>
    </div>
  );
};

export default Concat;
