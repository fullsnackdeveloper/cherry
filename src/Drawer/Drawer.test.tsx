import Drawer from "./Drawer";
import { DrawerProps } from "./Drawer.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: DrawerProps;

  const renderComponent = () => render(<Drawer {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Drawer");

    expect(component).toHaveTextContent("velvet was here");
  });
});
