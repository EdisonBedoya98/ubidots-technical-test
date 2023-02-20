import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import type { RenderResult } from "@testing-library/react";
import TableLaunches from "./table-launches";
import { useFavoriteLaunch, useLaunches } from "@/hooks/hooks";

jest.mock("@/hooks/hooks");
const mockUpcomingLaunches = {
  upcomingLaunchesData: [
    {
      rocket: { rocket_name: "Falcon 9" },
      launch_date_local: "Mar 1, 2023 00:00:00",
      launch_site: { site_name: "KSC LC 39A" },
    },
  ],

  isLoading: false,
  isError: false,
};
describe("<TableLaunches />", () => {
  test("renders content", () => {
    const mockUseFavorite = {
      isFavorite: true,
      updateFavoriteLaunch: jest.fn(),
    };

    useLaunches.mockReturnValue(mockUpcomingLaunches);
    useFavoriteLaunch.mockReturnValue(mockUseFavorite);
    const component = render(<TableLaunches />);

    expect(component.container).toHaveTextContent("Mission");
    expect(component.container).toHaveTextContent("Date (UTC)");
    expect(component.container).toHaveTextContent("Launchpad");
    expect(component.container).toHaveTextContent("Favorite");
  });
});
test("Click heart icon", () => {
  const mockOnFavorite = jest.fn();
  const mockUseFavorite = {
    isFavorite: true,
    updateFavoriteLaunch: mockOnFavorite,
  };

  useLaunches.mockReturnValue(mockUpcomingLaunches);
  useFavoriteLaunch.mockReturnValue(mockUseFavorite);
  const component = render(<TableLaunches />);

  const button = component.getByLabelText("heart");

  fireEvent.click(button);
  expect(mockOnFavorite).toHaveBeenCalledTimes(1);
});
test("Validate spinner when is loading", () => {
  const mockOnFavorite = jest.fn();
  mockUpcomingLaunches.isLoading = true;

  const mockUseFavorite = {
    isFavorite: true,
    updateFavoriteLaunch: mockOnFavorite,
  };

  useLaunches.mockReturnValue(mockUpcomingLaunches);
  useFavoriteLaunch.mockReturnValue(mockUseFavorite);
  const component = render(<TableLaunches />);
  const spinner = component.getByRole("status");

  expect(spinner).toBeVisible();
});
test("Validate spinner when there is a error", () => {
  const mockOnFavorite = jest.fn();
  mockUpcomingLaunches.isError = true;

  const mockUseFavorite = {
    isFavorite: true,
    updateFavoriteLaunch: mockOnFavorite,
  };

  useLaunches.mockReturnValue(mockUpcomingLaunches);
  useFavoriteLaunch.mockReturnValue(mockUseFavorite);
  const component = render(<TableLaunches />);

  expect(component.container).toHaveTextContent(
    "Ha ocurrido un error, por favor recargue la página"
  );
});
