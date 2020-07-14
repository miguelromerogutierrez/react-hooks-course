import React from "react";
import ReactDOM from "react-dom";

import { Dropdown, DropdownControlled, AsyncLoad } from "./App.solution";
// import { Counter, States, Form, PrintArrays } from "./App";

let ControllingDropdown = () => {
  let [state, setState] = React.useState('');
  let handleSelect = (e, value) => {
    setState(value)
  };
  return (<DropdownControlled
    placeholder="Select a item"
    value={state}
    onSelect={handleSelect}
    options={[
      {text: 'option1', value: 'opt1'},
      {text: 'option2', value: 'opt2'},
      {text: 'option3', value: 'opt3'}
    ]}
  />);
};

let ControllingAsync = () => {
  let [refresh, setRefresh] = React.useState(false);
  let handleRefresh = () => {
    console.log('Refreshing...');
    setRefresh(true)
  };
  let onDoneRefresh = () => {
    console.log('done Refresh...');
    setRefresh(false);
  };
  return (
    <div>
      <button onClick={handleRefresh}>Refresh</button>
      <AsyncLoad refresh={refresh} doneRefresh={onDoneRefresh} />
    </div>
  )
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div>
      <h3>Dropdown</h3>
      <Dropdown />
    </div>
    <div>
      <h3>Dropdown Uncontrolled</h3>
      <DropdownControlled
        placeholder="Select a item"
        options={[
          {text: 'option1', value: 'opt1'},
          {text: 'option2', value: 'opt2'},
          {text: 'option3', value: 'opt3'}
        ]}
      />
      <br />
      <h3>Dropdown Controlled</h3>
      <ControllingDropdown />
    </div>
    
    <div>
      <h3>Async Load</h3>
      <ControllingAsync />
    </div>
  </React.StrictMode>,
  rootElement
);
