import React from "react";

interface Props {
  onClick: () => void;
}
const Dim = ({ onClick }: Props) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        opacity: "0.2",
        position: "fixed",
        zIndex: 2,
        left: 250,
      }}
      onClick={onClick}
    />
  );
};

export default Dim;
