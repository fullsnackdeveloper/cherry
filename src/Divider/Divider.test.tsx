
import React from "react";
import { render } from "@testing-library/react";

import Divider from "./Divider";
import { DividerProps } from "./Divider.types";

describe("Test Component", () => {
  let props: DividerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Divider {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Divider");

    expect(component).toHaveTextContent("velvet was here");
  });
});
