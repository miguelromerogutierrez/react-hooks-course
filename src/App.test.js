import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Counter, States, Form, PrintArrays } from "./App";
// import { Counter, States, Form, PrintArrays } from "./App.solution";

describe("Test Counter", () => {
  it("Counter debe aumentar en uno", () => {
    let { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId("button"));
    expect(getByTestId("counter").innerHTML).toMatch("1");
  });
});

describe("Test States", () => {
  it("Texto debe cambiar a 'Loading...'", () => {
    let { getByTestId } = render(<States />);
    let button = getByTestId("button");
    fireEvent.click(button);
    expect(button.innerHTML).toMatch("Loading...");
  });
});

describe("Test Form", () => {
  it("Valor de input debe cambiar", () => {
    let { getByTestId } = render(<Form />);
    let input = getByTestId("input");
    fireEvent.change(input, {
      target: {
        value: 'Miguel Romero'
      }
    });
    expect(input.value).toMatch("Miguel Romero");
  });
});

describe("Test PrintArrays", () => {
  it("Se deben agregar elementos a la lista al hacer click", () => {
    let { getByTestId } = render(<PrintArrays />);
    let list = getByTestId("list");
    let button = getByTestId("button");
    expect(list.childNodes.length).toBe(0);
    fireEvent.click(button);
    expect(list.childNodes.length).toBe(1);
    fireEvent.click(button);
    expect(list.childNodes.length).toBe(2);
  });
});
