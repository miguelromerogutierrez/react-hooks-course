import React from "react";
import Client from './utils/client-user';

/** 🦉
 * Completa el componente ThemeContextProvider para que la implementación de ThemeExample
 * pueda funcionar. Debes implementar una función `toggle` para cambiar el valor de theme
 * de `light` a `dark` y viceversa. Luego `theme` y `toggle` pasalos como valor del contexto
 * al componente `ThemeContext.Provider`
*/
let ThemeContext = React.createContext({});

export let ThemeContextProvider = (props) => {
  let [theme, setTheme] = React.useState(props.initial || 'light');
  let toggel = () => {};
  return <ThemeContext.Provider {...props} value={{}} />
};

export function ThemeExample() {
  let {theme, toggle} = useContext(ThemeContext);
  let styles = {
    'light': {
      backgroundColor: '#ffffff',
      border: '1px solid #121212',
      color: '#121212'
    },
    'dark': {
      backgroundColor: '#121212',
      color: '#ffffff'
    }
  };
  return (
    <button style={styles[theme]} onClick={toggle}>{theme.toUpperCase()}</button>
  )
}

/**
 ******************************************************************************
 **Ejemplo 2*******************************************************************
 ******************************************************************************
 */

/** 🦉
 * Completa el componente UserContextProvider para que la implementación de UserExample.
 * Debes implementar las funciones `login` y `logout` utilizando `Client` para obtener
 * la información del usuario. Ej:
 * `Client.login().then(data => setUser(data))`
 * `Client.logout().then(data => setUser(data))`
*/

let UserContext = React.createContext(null);

export let UserContextProvider = (props) => {
  let [user, setUser] = React.useState(null);
  let login = () => {};
  let logout = () => {};

  return <UserContext.Provider {...props} value={} />
};

export function UserExample() {
  let { user, login, logout } = useContext(UserContext);

  return (
    <div>
      {
        !user
        ? <button onClick={login}>Login</button>
        : <button onClick={logout}>Logout</button>
      }
      <pre data-testid="json">{JSON.stringify(user || '{}')}</pre>
    </div>
  );
}
