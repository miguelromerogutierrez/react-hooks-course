import React from "react";
// 🎊 Recuerda que puedes importar los hooks usando la operación de desconstrucción
// import React, { useState } from 'react'

/** 🦉
 * Utiliza useState para declarar un estado de tipo numerico inciando en 0.
 * Con cada click el estado debe aumentar en 1
*/
export function Counter() {
  // 🦉: let [miEstado, modificador] = useState(estadoInicial);
  let handleClick = () => {
    // 🦉: cuando el usuario haga click aumenta en uno el valor del contador
  };

  return (
    <div className="App">
      <p data-testid="counter">{/*🦉: imprime el valor del estado aquí */}</p>
      <button data-testid="button" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}

/** 🦉
 * Utiliza useState para declarar un estado de tipo boleano
 * y controlar el texto del botón. Cuando el usuario haga click
 * en el botón, el texto debe cambiar a 'Loading...'
*/
export function States() {
  // 🦉: let [miEstado, modificador] = useState(estadoInicial);
  let handleClick = () => {
    // 🦉: el estado debe modificarse aqui
  };

  return (
    <button data-testid="button" onClick={handleClick}>
      {
      /** 🦉
       * Cuando el estado sea 
       * true en lugar de 'Click Me' se debe imprimir 'Loading...' 
      */
      }
      Click Me
    </button>
  );
};

/** 🦉
 * Utiliza useState para declarar un estado de tipo string.
 * Cuando el usuario coloque cualquier texto en el input este debe
 * cambiar el valor del estado por la cadena que esta recibiendo.
*/
export function Form() {
  // 🦉: let [miEstado, modificador] = useState(estadoInicial);
  let handleChange = (event) => {
    let inputValue = event.target.value;
    // 🦉: el estado debe modificarse aqui
  };

  return (
    <input
      data-testid="input"
      type="text"
      name="name"
      value={''/* 🦉: aqui va implementado el estado */}
      onChange={handleChange}
    />
  );
};

/** 🦉
 * Utiliza useState para declarar un estado de tipo Array vacío.
 * Cada que se de click en el botón, el arreglo debe crecer el tamaño
 * del arreglo con un elemento nuevo
*/
export function PrintArrays() {
  // 🦉: let [miEstado, modificador] = useState(estadoInicial);
  let handleClick = (event) => {
    // 🦉: el estado debe modificarse aqui
  };

  return (
    <div>
      <ul data-testid="list">
        {
          /** 🦉
           * imprime la lista de elementos, utilizando la etiqueta
           * `li`. Usa la función map de los arreglos para iterar
           * sobre el arreglo y transformalo a elementos `li`.
          */
        }
      </ul>
      <button
        data-testid="button"
        onClick={handleClick}
      >
          Agrega un elemento
      </button>
    </div>
  );
};