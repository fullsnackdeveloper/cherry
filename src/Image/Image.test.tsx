import Image from "./Image";
import { ImageProps } from "./Image.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: ImageProps;

  const renderComponent = () => render(<Image {...props} />);

  it("should render url text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Image");

    expect(component).toHaveTextContent("velvet was here");
  });
});
