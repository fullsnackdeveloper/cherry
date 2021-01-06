import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: NavbarProps;

  const renderComponent = () => render(<Navbar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Navbar");

    expect(component).toHaveTextContent("velvet was here");
  });
});
