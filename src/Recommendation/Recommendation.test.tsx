
import React from "react";
import { render } from "@testing-library/react";

import Recommendation from "./Recommendation";
import { RecommendationProps } from "./Recommendation.types";

describe("Test Component", () => {
  let props: RecommendationProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Recommendation {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "velvet was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Recommendation");

    expect(component).toHaveTextContent("velvet was here");
  });
});
