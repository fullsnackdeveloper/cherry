import Header from "./Header";
import { HeaderProps } from "./Header.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: HeaderProps;

  beforeEach(() => {
    props = {
      title: "bar"
    };
  });

  const renderComponent = () => render(<Header {...props} />);

  it("should render title text correctly", () => {
    props.title = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Header");

    expect(component).toHaveTextContent("velvet was here");
  });
});
