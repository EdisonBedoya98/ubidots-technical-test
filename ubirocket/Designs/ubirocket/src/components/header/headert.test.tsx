import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "./header";
import type { RenderResult } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: () => ({
    router: { push: jest.fn() },
  }),
}));

describe("<Header />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Header />);
  });

  test("renders content", () => {
    expect(component.container).toHaveTextContent("Launches");
    expect(component.container).toHaveTextContent("Countdown");
  });
});
