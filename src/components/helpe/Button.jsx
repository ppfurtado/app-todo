import React from "react";

const Button = (props) => {
  return (
    <button
      style={{
        padding: "5px 8px",
        background: "white",
        borderRadius: "4px",
        border: "1px solid #4bbbce",
        color: "#4bbbce",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
