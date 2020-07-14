import React from "react";
import Client from './utils/client-dropdown';

/** 🦉
 * Utiliza useEffect para que cada que "show" cambie a `true`
 * se agregue un listener a la ventana (window) para poder cerrar
 * el Dropdown cada que se haga un click fuera del dropdown.
*/
export function Dropdown() {
  let [show, toggle] = React.useState(false);

  // 🦉: useEffect(callback, [dependencies]);
  /** 🦉
   * Dentro del callback de useEffect agrega y remueve el listener
   * para ocultar el Dropdown:
   * let hideDropdown = () => {
      if (show) toggle(false)
    };
   */

  let handleClick = () => {
    toggle(!show);
  };

  return (
    <div>
      <button data-testid="dd-button" onClick={handleClick}>
        Dropdown
      </button>
      {
        show ? (
          <ul data-testid="dd-list">
            <li><button>opt1</button></li>
            <li><button>opt2</button></li>
            <li><button>opt3</button></li>
          </ul>
        ) : null
      }
    </div>
  );
}

/** 🦉
 * Utiliza useEffect para que el valor del dropdown pueda ser 
 * controlado desde un componente padre y desde el mismo componente
*/
export function DropdownControlled(props) {
  let [show, toggle] = React.useState(false);
  let [valueDD, setValue] = React.useState(props.value || props.placeholder);

  // 🦉: useEffect(callback, [dependencies]);

  let handleClick = () => {
    toggle(!show);
  };

  let select = (value) => (event) => {
    toggle(false);
    if (typeof props.onSelect === 'function') {
      props.onSelect(event, value);
    } else {
      setValue(value);
    }
  };

  return (
    <div>
      <button data-testid="dd-button" onClick={handleClick}>
        {valueDD}
      </button>
      {
        show ? (
          <ul data-testid="dd-list">
            {props.options.map((opt, i) => (
              <li key={`dd-${i}`}><button onClick={select(opt.value)}>{opt.text}</button></li>
            ))}
          </ul>
        ) : null
      }
    </div>
  );
};

/** 🦉
 * Utiliza useEffect dos veces; la primera para cargar la data inicial
 * y la segunda para cuando te pidan hacer un refresh
 * y volver a cargar la data.
*/
export function AsyncLoad({doneRefresh, refresh}) {
  let [data, setData] = React.useState([]);

  // 🦉: useEffect(callback, [dependencies]);
  /**🦉
   * Utiliza la siguiente función para hacer la carga inicial
   * Client.load()
      .then(__data => {
        setData(__data);
      });
   */
  /**🦉
   * Utiliza la siguiente función para hacer el refresh
   * Client.refresh()
      .then(__data => {
        setData(__data);
        doneRefresh(__data);
      });
   */

  return (
    <div>
      {
        data.length === 0 || refresh
        ? 'Loading...'
        : (
          <ul data-testid="list">
            {data.map((element, i) => (
              <li key={`al-${i}`}>{element}</li>
            ))}
          </ul>
        )
      }
      
    </div>
  );
};
