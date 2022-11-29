import React from "react";

import { useFloating, offset, flip, shift } from "@floating-ui/react-dom";
export const Card = () => {
  const { reference, floating, x, y } = useFloating({
    placement: "top-end",
    middleware: [offset(10), flip(), shift()],
  });
  return (
    <div className="card">
      <span ref={floating} style={{ position: "absolute", top: y, left: x }}>
        Cards
      </span>
      <button ref={reference}>Reference</button>
    </div>
  );
};
