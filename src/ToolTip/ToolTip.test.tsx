import React from "react";
import ToolTip from "./ToolTip";
import { ToolTipProps } from "./ToolTip.types";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: ToolTipProps;

  const renderComponent = () => render(<ToolTip {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ToolTip");

    expect(component).toHaveTextContent("velvet was here");
  });
});
