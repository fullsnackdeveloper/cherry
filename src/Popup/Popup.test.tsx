import Popup from "./Popup";
import { PopupProps } from "./Popup.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: PopupProps;

  const renderComponent = () => render(<Popup {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Popup");

    expect(component).toHaveTextContent("velvet was here");
  });
});
