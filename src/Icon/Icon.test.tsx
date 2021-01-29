import Icon from "./Icon";
import { IconProps } from "./Icon.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: IconProps;

  beforeEach(() => {
    props = {
      icon: "home"
    };
  });

  const renderComponent = () => render(<Icon {...props} />);

  it("should render foo text correctly", () => {
    props.icon = "home";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Icon");

    expect(component).toHaveTextContent("velvet was here");
  });
});
