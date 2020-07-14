import React, { useContext } from "react";
import Client from './utils/client-user';

let ThemeContext = React.createContext({});

export let ThemeContextProvider = (props) => {
  let [theme, setTheme] = React.useState(props.initial || 'light');
  let toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return <ThemeContext.Provider {...props} value={{theme, toggle}} />
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

let UserContext = React.createContext(null);

export let UserContextProvider = (props) => {
  let [user, setUser] = React.useState(null);
  let login = () => Client.login().then(data => setUser(data));
  let logout = () => Client.logout().then(data => setUser(data));
  return <UserContext.Provider {...props} value={{user, login, logout}} />
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
