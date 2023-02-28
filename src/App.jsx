import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [bgColor, setBgColor] = useState("hsl(0,0%,0%)");

  const handleBgColor = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    setBgColor(`hsl(${h}, ${s}%, ${l}%)`);
  };

  return (
    <div className="App" style={{ background: bgColor }}>
      <Button />
      <button onClick={handleBgColor}>Click to change background color</button>
    </div>
  );
}

export default App;
