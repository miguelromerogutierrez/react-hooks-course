import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  ThemeContextProvider,
  ThemeExample,
  UserContextProvider,
  UserExample,
} from "./App";
// import {
//   ThemeContextProvider,
//   ThemeExample,
//   UserContextProvider,
//   UserExample,
// } from "./App.solution";
import Client from "./utils/client-user";

describe("Test Theme", () => {
  it("Se debe cambiar de light a dark theme", () => {
    let { getByText } = render(
      <ThemeContextProvider initial="light">
        <ThemeExample />
      </ThemeContextProvider>
    );
    let button = getByText("LIGHT");
    fireEvent.click(button);
    expect(button.innerHTML).toMatch("DARK");
  });

  it("Se debe cambiar de dark a light theme", () => {
    let { getByText } = render(
      <ThemeContextProvider initial="dark">
        <ThemeExample />
      </ThemeContextProvider>
    );
    let button = getByText("DARK");
    fireEvent.click(button);
    expect(button.innerHTML).toMatch("LIGHT");
  });
});

describe("Test User", () => {
  it("Se debe hacer login usuario", () => {
    Client.login = jest.fn(() => ({
      then: (cb) => cb({ name: 'Jon Doe', email: 'jondoe@todosobrejs.com'}),
    }));
    let { getByText, getByTestId } = render(
      <UserContextProvider>
        <UserExample />
      </UserContextProvider>
    );
    let loginButton = getByText("Login");
    fireEvent.click(loginButton);
    expect(getByTestId('json')).toBeDefined();
  });

  it("Debe hacer logout el usuario", () => {
    Client.login = jest.fn(() => ({
      then: (cb) => cb({ name: 'Jon Doe', email: 'jondoe@todosobrejs.com'}),
    }));
    Client.logout = jest.fn(() => ({
      then: (cb) => cb(null),
    }));
    let { getByText, getByTestId } = render(
      <UserContextProvider>
        <UserExample />
      </UserContextProvider>
    );
    let loginButton = getByText("Login");
    fireEvent.click(loginButton);
    fireEvent.click(getByText("Logout"));
    expect(loginButton).toBeDefined();
  });
});
