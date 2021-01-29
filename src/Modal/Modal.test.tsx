import Modal from "./Modal";
import { ModalProps } from "./Modal.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: ModalProps;
  const renderComponent = () => render(<Modal {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Modal");

    expect(component).toHaveTextContent("velvet was here");
  });
});
