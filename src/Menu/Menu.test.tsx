import Menu from "./Menu";
import { MenuProps } from "./Menu.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: MenuProps;

  beforeEach(() => {
    props = {
      children: "bar"
    };
  });

  const renderComponent = () => render(<Menu {...props} />);

  it("should render children text correctly", () => {
    props.children = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Menu");

    expect(component).toHaveTextContent("velvet was here");
  });
});
