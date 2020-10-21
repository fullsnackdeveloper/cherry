import React from "react";
import Row from "./Row";
import { RowProps } from "./Row.types";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: RowProps;

  beforeEach(() => {
    props = {
      title: "bar"
    };
  });

  const renderComponent = () => render(<Row {...props} />);

  it("should render title text correctly", () => {
    props.title = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Row");

    expect(component).toHaveTextContent("velvet was here");
  });
});
