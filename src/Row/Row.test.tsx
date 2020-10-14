
import React from "react";
import { render } from "@testing-library/react";

import Row from "./Row";
import { RowProps } from "./Row.types";

describe("Test Component", () => {
  let props: RowProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Row {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Row");

    expect(component).toHaveTextContent("velvet was here");
  });
});
