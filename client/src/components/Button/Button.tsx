import React from "react";
import "./button.css";

const Button = ({ style, handleColor }: any) => {
  return (
    <button
      style={{
        backgroundColor: style.bg_color,
        width: style.width,
        height: style.height,
      }}
      onClick={handleColor}
    ></button>
  );
};

export default Button;
