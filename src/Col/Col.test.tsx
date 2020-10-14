import Col from "./Col";
import { ColProps } from "./Col.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: ColProps;

  beforeEach(() => {
    props = {
      children: "bar"
    };
  });

  const renderComponent = () => render(<Col {...props} />);

  it("should render children text correctly", () => {
    props.children = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Col");

    expect(component).toHaveTextContent("velvet was here");
  });
});
