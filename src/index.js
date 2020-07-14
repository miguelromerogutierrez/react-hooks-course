import React from "react";
import ReactDOM from "react-dom";

// import { ThemeContextProvider, ThemeExample, UserContextProvider, UserExample } from "./App.solution";
import { ThemeContextProvider, ThemeExample, UserContextProvider, UserExample } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div>
      <h3>Theme Example</h3>
      <ThemeContextProvider>
        <ThemeExample />
      </ThemeContextProvider>
    </div>

    <div>
      <h3>User Example</h3>
      <UserContextProvider>
        <UserExample />
      </UserContextProvider>
    </div>

  </React.StrictMode>,
  rootElement
);
