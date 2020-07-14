import React from "react";
import Client from './utils/client-user';

/** 🦉
 * Completa la función formReducer que sera la función reducer para modificar
 * el estado de nuestro formulario
 */
let formReducer = (initialState, action) => {
  return {};
};

export function Form() {
  let [state, dispatch] = React.useReducer(formReducer, {});
  let handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    //🦉: dispará la acción para modificar el formulario
  };

  return (
    <div>
      <div>
        <label for="name">Nombre</label>
        <input id="name" type="text" name="name" value={nameForm.name} onChange={handleChange} />
      </div>
      <div>
        <label for="lastName">Apellidos</label>
        <input id="lastName" type="text" name="lastName" value={nameForm.lastName} onChange={handleChange} />
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="email" type="email" name="email" value={nameForm.email} onChange={handleChange} />
      </div>
      <pre>{JSON.stringify(nameForm)}</pre>
    </div>
  );
};

/**
 ******************************************************************************
 **Ejemplo 2*******************************************************************
 ******************************************************************************
 */

 /** 🦉
 * Completa la función asyncReducer para poder manejar tres estado de nuestra app:
 * loading: esta bandera indicará que hay información que esta cargandose.
 * payload: este estado almacenará la información cargada de la petición asíncrona (almacenará la respuesta de éxito o el error).
 * error: es una bandera que indicará que lo almacenado en payload es el error regresado por el servidor.
 */

let initAsyncReducer = (data = {}) => ({
  loading: false,
  payload: data,
  error: false
});

let asyncReducer = (initialState, action) => {
  return { }
};

export function Async(props) {
  let [state, dispatch] = React.useReducer(asyncReducer, props.initialData, initAsyncReducer);

  let handleReset = () => {
    // 🦉: Dispara la acción para regresar al estado inicial
  };
  
  let handleLoad = () => {
    // 🦉: Dispara la acción para indicar en el estado que se esta cargando información
    Client.login()
      .then(data => {
        // 🦉: Dispara la acción para poner el estado como carga exitoso
      })
      .catch(data => {
        // 🦉: Dispara la acción para poner el error en el estado
      });
  };

  return (
    <div>
      <button onClick={handleLoad}>Load data</button>
      <button onClick={handleReset}>Reset data</button>
      <pre data-testid="json">{JSON.stringify(state)}</pre>
    </div>
  );
}
