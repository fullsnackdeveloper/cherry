import React from "react";
import StepBar from "./StepBar";
import { StepBarProps } from "./StepBar.types";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: StepBarProps;

  const renderComponent = () => render(<StepBar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("StepBar");

    expect(component).toHaveTextContent("velvet was here");
  });
});
