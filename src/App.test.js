import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
// import { Dropdown, DropdownControlled, AsyncLoad } from "./App";
import { Dropdown, DropdownControlled, AsyncLoad } from "./App.solution";
import Client from './utils/client-dropdown';

jest.mock('./utils/client-dropdown', () => {
  return {
    load: jest.fn(),
    refresh: jest.fn()
  };
});

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

describe("Test Dropdown", () => {
  it("Se debe mostrar la lista al hacer click en el dropdown", () => {
    let { getByTestId } = render(<Dropdown />);
    fireEvent.click(getByTestId("dd-button"));
    expect(getByTestId("dd-list")).toBeDefined();
  });

  it("Se debe mostrar ocultar la lista al hacer click en cualquier parte del window", () => {
    let { getByTestId, queryByTestId } = render(<Dropdown />);
    fireEvent.click(getByTestId("dd-button"));
    fireEvent.click(window);
    expect(queryByTestId("dd-list")).toBeNull();
  });
});

describe("Test DropdownControlled", () => {
  let options = [
      {text: 'option1', value: 'opt1'},
      {text: 'option2', value: 'opt2'}
    ];
  describe("Uncontrolled", () => {
    it("Debe cambiar el valor", () => {
      let { getByTestId, getByText } = render(<DropdownControlled options={options} />);
      let button = getByTestId("dd-button");
      fireEvent.click(button);
      fireEvent.click(getByText('option1'));
      expect(button.innerHTML).toMatch("opt1");
    });
  });

  describe("Controlled", () => {
    it("Debe cambiar el valor", () => {
      let { getByTestId, getByText } = render(<ControllingDropdown />);
      let button = getByTestId("dd-button");
      fireEvent.click(button);
      fireEvent.click(getByText('option1'));
      expect(button.innerHTML).toMatch("opt1");
    });
  });
});

describe("Test AsyncLoad", () => {
  it("Debe existir el mensaje de Loading...", () => {
    Client.load = jest.fn(() => new Promise(resolve => resolve([])));
    let { getByText } = render(<AsyncLoad />);
    expect(getByText('Loading...')).toBeDefined();
  });

  it("Deben cargar los elementos", () => {
    Client.load = jest.fn(() => ({
      then: (cb) => cb(['a', 'b', 'c'])
    }));
    let component = render(<AsyncLoad />);
    expect(component.getByTestId('list').childElementCount).toBe(3);
  });
});
