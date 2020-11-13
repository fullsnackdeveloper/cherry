import React from "react";
import Step from "./Step";
import { StepProps } from "./Step.types";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: StepProps;

  const renderComponent = () => render(<Step {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Step");

    expect(component).toHaveTextContent("velvet was here");
  });
});
