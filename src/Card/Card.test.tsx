import Card from "./Card";
import { CardProps } from "./Card.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      title: "bar"
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it("should render title text correctly", () => {
    props.title = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Card");

    expect(component).toHaveTextContent("velvet was here");
  });
});
