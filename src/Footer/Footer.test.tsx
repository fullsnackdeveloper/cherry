
import React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";
import { FooterProps } from "./Footer.types";

describe("Test Component", () => {
  let props: FooterProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Footer {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Footer");

    expect(component).toHaveTextContent("velvet was here");
  });
});
