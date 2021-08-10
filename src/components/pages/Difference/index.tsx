import React from "react";
import NormalList from "../../List/NormalList";
import _ from "lodash";

const Difference = () => {
  const original = ["Water", "Soda", "Banana", "Orange", "Juse"];
  const toCompare = ["Soda", "soda", "Water", "water", "Coconut", "Fish"];
  const result = _.difference(original, toCompare);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <div style={{ width: "33%" }}>
        <h4>Original</h4>
        <NormalList lists={original} />
      </div>
      <div style={{ width: "33%" }}>
        <h4>To Compare</h4>
        <NormalList lists={toCompare} />
      </div>
      <div style={{ width: "33%" }}>
        <h4>After Compare</h4>
        <NormalList lists={result} />
      </div>
    </div>
  );
};

export default Difference;
