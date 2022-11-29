import React from "react";
import ReactDom from "react-dom";
import { useFloating } from "@floating-ui/react-dom";
export const Card = () => {
  const { reference, floating, x, y } = useFloating({
    placement: "top-end"
  });
  return (
    <div className="card">
      {ReactDom.createPortal(
        <span ref={floating} style={{ position: "absolute", top: y, left: x }}>
          Cards
        </span>,
        document.body
      )}
      <button ref={reference}>Reference</button>
    </div>
  );
};
