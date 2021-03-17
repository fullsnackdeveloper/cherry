
import React from "react";
import { render } from "@testing-library/react";

import Story from "./Story";
import { StoryProps } from "./Story.types";

describe("Test Component", () => {
  let props: StoryProps;

  const renderComponent = () => render(<Story {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Story");

    expect(component).toHaveTextContent("velvet was here");
  });
});
