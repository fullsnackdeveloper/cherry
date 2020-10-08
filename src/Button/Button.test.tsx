import Button from "./Button";
import { ButtonProps } from "./Button.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      size: "regular"
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render foo text correctly", () => {
    props.size = "regular";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("Click here");
  });
});
