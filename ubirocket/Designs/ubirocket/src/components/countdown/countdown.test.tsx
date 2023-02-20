import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Countdown from "./countdown";
import { useCountDown, useNextLaunchCountDown } from "@/hooks/hooks";

jest.mock("@/hooks/hooks");

jest.mock("next/router", () => ({
  useRouter: () => ({
    router: { push: jest.fn() },
  }),
}));

describe("<Countdown />", () => {
  const mockUseCountDown = {
    countdown: { days: 9, hours: 4, minutes: 33, seconds: 49 },
    isLoading: false,
  };

  test("renders CountDownInfo", () => {
    const mockUseNextLaunchCountDown = {
      nextLaunchData: { rocket: { rocket_name: "Falcon 9" } },
      isLoading: false,
      isError: false,
    };

    useNextLaunchCountDown.mockReturnValue(mockUseNextLaunchCountDown);
    useCountDown.mockReturnValue(mockUseCountDown);

    const component = render(<Countdown />);

    expect(component.container).toHaveTextContent("Upcoming");
    expect(component.container).toHaveTextContent(
      mockUseNextLaunchCountDown.nextLaunchData.rocket.rocket_name
    );
  });
  test("renders error message", () => {
    const mockUseNextLaunchCountDown = {
      nextLaunchData: { rocket: { rocket_name: "Falcon 9" } },
      isLoading: false,
      isError: true,
    };

    useNextLaunchCountDown.mockReturnValue(mockUseNextLaunchCountDown);
    useCountDown.mockReturnValue(mockUseCountDown);

    const component = render(<Countdown />);

    expect(component.container).toHaveTextContent(
      "Ha ocurrido un error, por favor recargue la página"
    );
  });
  test("renders Spinner when is loading", () => {
    const mockUseNextLaunchCountDown = {
      nextLaunchData: { rocket: { rocket_name: "Falcon 9" } },
      isLoading: true,
      isError: false,
    };

    useNextLaunchCountDown.mockReturnValue(mockUseNextLaunchCountDown);
    useCountDown.mockReturnValue(mockUseCountDown);

    const component = render(<Countdown />);

    const spinner = component.getByRole("status");

    expect(spinner).toBeVisible();
  });
});
