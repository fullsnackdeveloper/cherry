import NavBar from "./NavBar";
import { NavBarProps } from "./NavBar.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: NavBarProps;

  beforeEach(() => {
    props = {
      logo: "bar"
    };
  });

  const renderComponent = () => render(<NavBar {...props} />);

  it("should render logo text correctly", () => {
    props.logo = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("NavBar");

    expect(component).toHaveTextContent("velvet was here");
  });
});
