import Link from "./Link";
import { LinkProps } from "./Link.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: LinkProps;

  beforeEach(() => {
    props = {
      children: "bar"
    };
  });

  const renderComponent = () => render(<Link {...props} />);

  it("should render children text correctly", () => {
    props.children = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Link");

    expect(component).toHaveTextContent("velvet was here");
  });
});
