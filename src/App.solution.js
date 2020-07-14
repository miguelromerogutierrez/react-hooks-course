import React from "react";
import Client from './utils/client-user';

let formReducer = (initialState, action) => {
  return {
    ...initialState,
    ...action
  };
};

export function Form() {
  let [nameForm, setNameForm] = React.useReducer(formReducer, {});
  let handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    setNameForm({[fieldName]: fieldValue});
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

let initAsyncReducer = (data = {}) => ({
  loading: false,
  payload: data,
  error: false
});

let CASES = {
  '@async/LOADING': () => ({ loading: true }),
  '@async/SUCCESS': (payload) => ({ payload }),
  '@async/ERROR': (payload) => ({ payload, error: true }),
  '@async/RESET': initAsyncReducer
};

let asyncReducer = (initialState, action) => {
  let defaults = {
    loading: false,
    error: false
  };
  return {
    ...initialState,
    ...defaults,
    ...CASES[action.type](action.payload)
  }
};

export function Async(props) {
  let [state, dispatch] = React.useReducer(asyncReducer, props.initialData, initAsyncReducer);

  let handleReset = () =>
    dispatch({ type: '@async/RESET', payload: props.initialData });
  
  let handleLoad = () => {
    dispatch({ type: '@async/LOADING' });
    Client.login()
      .then(data => dispatch({ type: '@async/SUCCESS', payload: data }))
      .catch(data => dispatch({ type: '@async/ERROR', payload: data }));
  };

  return (
    <div>
      <button onClick={handleLoad}>Load data</button>
      <button onClick={handleReset}>Reset data</button>
      <pre data-testid="json">{JSON.stringify(state)}</pre>
    </div>
  );
}
