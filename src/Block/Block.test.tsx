import Block from "./Block";
import { BlockProps } from "./Block.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: BlockProps;

  const renderComponent = () => render(<Block {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Block");

    expect(component).toHaveTextContent("velvet was here");
  });
});
