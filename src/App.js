import React from "react";
// 🎊 Recuerda que puedes importar los hooks usando la operación de desconstrucción
// import React, { useState } from 'react'

export default function App() {
  // 🦉: useState regresa un Arreglo con dos elementos
  //  el primer elemento es el valor del estado y el segundo es la función que permite modificar ese valor
  let handleClick = () => {
    // 🦉: cuando el usuario haga click aumenta en uno el valor del contador
  };
  return (
    <div className="App">
      <p data-testid="counter">{/** imprime el valor del estado aquí */}</p>
      <button data-testid="button" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}
