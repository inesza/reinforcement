import React, { useState } from "react";

const Button = () => {
  const [bgColor, setBgColor] = useState("hsl(0,0%,0%)");
  const [textColor, setTextColor] = useState("white");

  const handleBtnBgColor = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    if (l < 50) {
      setTextColor("white");
    } else {
      setTextColor("black");
    }

    setBgColor(`hsl(${h}, ${s}%, ${l}%)`);
  };

  return (
    <button
      style={{
        background: bgColor,
        color: textColor,
        transition: "background 1.5s",
      }}
      onClick={handleBtnBgColor}
    >
      Click to change this button's background color
    </button>
  );
};

export default Button;
