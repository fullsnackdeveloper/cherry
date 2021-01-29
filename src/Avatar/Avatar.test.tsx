import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: AvatarProps;

  const renderComponent = () => render(<Avatar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Avatar");

    expect(component).toHaveTextContent("velvet was here");
  });
});
