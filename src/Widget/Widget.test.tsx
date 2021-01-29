import React from "react";
import Widget from "./Widget";
import { WidgetProps } from "./Widget.types";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: WidgetProps;


  const renderComponent = () => render(<Widget {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Widget");

    expect(component).toHaveTextContent("velvet was here");
  });
});
