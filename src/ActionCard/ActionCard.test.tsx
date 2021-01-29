import ActionCard from "./ActionCard";
import { ActionCardProps } from "./ActionCard.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: ActionCardProps;

  beforeEach(() => {
    props = {
      title: "bar"
    };
  });

  const renderComponent = () => render(<ActionCard {...props} />);

  it("should render foo text correctly", () => {
    props.title = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ActionCard");

    expect(component).toHaveTextContent("velvet was here");
  });
});
