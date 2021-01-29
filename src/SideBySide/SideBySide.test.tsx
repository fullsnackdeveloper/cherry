
import React from "react";
import { render } from "@testing-library/react";

import SideBySide from "./SideBySide";
import { SideBySideProps } from "./SideBySide.types";

describe("Test Component", () => {
  let props: SideBySideProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SideBySide {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SideBySide");

    expect(component).toHaveTextContent("velvet was here");
  });
});
