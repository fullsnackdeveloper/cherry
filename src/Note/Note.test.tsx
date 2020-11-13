import Note from "./Note";
import { NoteProps } from "./Note.types";
import React from "react";
import { render } from "@testing-library/react";

describe("Test Component", () => {
  let props: NoteProps;

  const renderComponent = () => render(<Note {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Note");

    expect(component).toHaveTextContent("velvet was here");
  });
});
