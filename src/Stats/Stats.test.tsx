
import React from "react";
import { render } from "@testing-library/react";

import Stats from "./Stats";
import { StatsProps } from "./Stats.types";

describe("Test Component", () => {
  let props: StatsProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Stats {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Stats");

    expect(component).toHaveTextContent("velvet was here");
  });
});
