import PageContainer from "./PageContainer";
import { PageContainerProps } from "./PageContainer.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: PageContainerProps;

  const renderComponent = () => render(<PageContainer {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("PageContainer");

    expect(component).toHaveTextContent("velvet was here");
  });
});
