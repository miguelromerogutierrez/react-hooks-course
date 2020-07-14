import React from "react";
import ReactDOM from "react-dom";

import { Form, Async } from "./App.solution";
// import { Form, Async } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div>
      <h3>Form</h3>
      <Form />
    </div>
    <div>
      <h3>Async</h3>
      <Async />
    </div>
    <div>
      <h3>Async Initial Data</h3>
      <Async initialData={{ name: 'Miguel Romero', email: 'miguelromero@todosobrejs.com' }} />
    </div>
  </React.StrictMode>,
  rootElement
);
