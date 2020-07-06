import React from "react";

import { render, fireEvent } from "@testing-library/react";
import AppCounter from "./App";
// import AppCounter from "./App.solution";

describe("Test counter", () => {
  it("counter should add 1", () => {
    let { getByTestId } = render(<AppCounter />);
    fireEvent.click(getByTestId("button"));
    expect(getByTestId("counter").innerHTML).toMatch("1");
  });
});
