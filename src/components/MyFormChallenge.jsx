// Formulario que maneja el input y el estado
// Aquí usaremos useRef para manejar el input.

import { useState, useRef } from "react";
import BoxColor from "./BoxColor";

const colors = [
  "red",
  "green",
  "pink",
  "yellow",
  "purple",
  "white",
  "blue",
  "aqua",
  "olive",
];

function MyFormChallenge() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const handleChange = () => {
    setValue(inputRef.current.value);
  };

  return (
    <>
    <input
    type="text"
    placeholder="Choose a color"
    ref={inputRef}
    onChange={handleChange}
    className="input"
  />
    <div className="container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={value} />
        ))}
    </div>
    </>
  );
}

export default MyFormChallenge;
