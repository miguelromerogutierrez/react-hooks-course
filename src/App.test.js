import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Form, Async } from "./App";
// import { Form, Async } from "./App.solution";
import Client from './utils/client-user';

describe("Test Form", () => {
  it("Se debe actualizar el valor de Nombre", () => {
    let { getByLabelText } = render(<Form />);
    let input = getByLabelText("Nombre");
    fireEvent.change(input, {
      target: {
        name: 'name',
        value: 'Jon'
      }
    });
    expect(input.value).toMatch("Jon");
  });

  it("Se debe actualizar el valor de Apellidos", () => {
    let { getByLabelText } = render(<Form />);
    let input = getByLabelText("Apellidos");
    fireEvent.change(input, {
      target: {
        name: 'lastName',
        value: 'Doe'
      }
    });
    expect(input.value).toMatch("Doe");
  });

  it("Se debe actualizar el valor de Apellidos", () => {
    let { getByLabelText } = render(<Form />);
    let input = getByLabelText("E-mail");
    fireEvent.change(input, {
      target: {
        name: 'email',
        value: 'jondoe@todosobrejs.com'
      }
    });
    expect(input.value).toMatch("jondoe@todosobrejs.com");
  });
});

describe("Test Async", () => {
  it('Se debe cargar la data', (done) => {
    Client.login = jest.fn(() => new Promise(resolve =>
      resolve({ name: "Jon Doe", email: "jondoe@todosobrejs.com" })
    ));
    let { getByText, getByTestId } = render(<Async />);
    fireEvent.click(getByText('Load data'));
    setTimeout(() => {
      expect(getByTestId('json').innerHTML).toMatch(`{"loading":false,"payload":{"name":"Jon Doe","email":"jondoe@todosobrejs.com"},"error":false}`);
      done();
    });
  });

  it('Se debe cargar la data con valor inicial', (done) => {
    let { getByTestId } = render(<Async initialData={{ name: "Miguel Romero", email: "miguelromero@todosobrejs.com" }} />);
    setTimeout(() => {
      expect(getByTestId('json').innerHTML).toMatch(`{"loading":false,"payload":{"name":"Miguel Romero","email":"miguelromero@todosobrejs.com"},"error":false}`);
      done();
    });
  });

  it('Se debe sobreescribir la data inicial', (done) => {
    Client.login = jest.fn(() => new Promise(resolve =>
      resolve({ name: "Jon Doe", email: "jondoe@todosobrejs.com" })
    ));
    let { getByText, getByTestId } = render(<Async initialData={{ name: "Miguel Romero", email: "miguelromero@todosobrejs.com" }} />);
    fireEvent.click(getByText('Load data'));
    setTimeout(() => {
      expect(getByTestId('json').innerHTML).toMatch(`{"loading":false,"payload":{"name":"Jon Doe","email":"jondoe@todosobrejs.com"},"error":false}`);
      done();
    });
  });

  it('Se debe reiniciar a la data inicial', (done) => {
    Client.login = jest.fn(() => new Promise(resolve =>
      resolve({ name: "Jon Doe", email: "jondoe@todosobrejs.com" })
    ));
    let { getByText, getByTestId } = render(<Async initialData={{ name: "Miguel Romero", email: "miguelromero@todosobrejs.com" }} />);
    fireEvent.click(getByText('Load data'));
    setTimeout(() => {
      fireEvent.click(getByText('Reset data'));
      expect(getByTestId('json').innerHTML).toMatch(`{"loading":false,"payload":{"name":"Miguel Romero","email":"miguelromero@todosobrejs.com"},"error":false}`);
      done();
    });
  });

  it('Se debe imprimir une rror', (done) => {
    Client.login = jest.fn(() => new Promise((resolve, reject) =>
      reject({ message: 'ERROR!' })
    ));
    let { getByText, getByTestId } = render(<Async />);
    fireEvent.click(getByText('Load data'));
    setTimeout(() => {
      expect(getByTestId('json').innerHTML).toMatch(`{"loading":false,"payload":{"message":"ERROR!"},"error":true}`);
      done();
    });
  });
});
