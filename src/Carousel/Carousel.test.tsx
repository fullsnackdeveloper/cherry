import Carousel from "./Carousel";
import { CarouselProps } from "./Carousel.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: CarouselProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Carousel {...props} />);

  it("should render children text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Carousel");

    expect(component).toHaveTextContent("velvet was here");
  });
});
