// Componente de cada cuadro de color 
// Si el valor del input coincide con el color del cuadro
// cambia el fondo y el texto.

function BoxColor ({color, value}) {
  const isMatch = value.toLowerCase() === color.toLowerCase();

  return (
    <div
      className="box"
      style={{
        backgroundColor: isMatch ? color : "black",
        borderColor: color,
        color: isMatch ? "black" : color,
      }}
    >
      {isMatch ? `Yes, I'm ${color} color` : `I'm not a ${value || "color"}`}
    </div>
  );
}

export default BoxColor;
