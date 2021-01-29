import ActionBar from "./ActionBar";
import { ActionBarProps } from "./ActionBar.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: ActionBarProps;

  const renderComponent = () => render(<ActionBar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ActionBar");

    expect(component).toHaveTextContent("velvet was here");
  });
});
