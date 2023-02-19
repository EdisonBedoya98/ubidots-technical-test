import { useEffect, useState } from "react";
import {
  getItemLocalStorage,
  getNextLaunchCounterData,
  getUpcomingLaunchesData,
  removeItemLocalStorage,
  setItemLocalStorage,
} from "@/services/services";

export const useCountDown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("Mar 1, 2023 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      // Calculate the time remaining
      const distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
      setIsLoading(false);
      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { countdown, isLoading };
};

export const useNextLaunchCountDown = () => {
  const [nextLaunchData, setNextLaunchData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getNextLaunchCounterData().then((data) => {
      setNextLaunchData(data);
      setIsLoading(false);
    });
  }, []);
  return { nextLaunchData, isLoading };
};

export const useFavoriteLaunch = (id: string) => {
  const [isFavorite, setisFavorite] = useState(false);

  useEffect(() => {
    isFavoriteInLocalStorage();
  }, []);

  const isFavoriteInLocalStorage = async () => {
    const isThereAFavorite = await getItemLocalStorage(id);
    setisFavorite(!!isThereAFavorite);
  };

  const updateFavoriteLaunch = async (id: string) => {
    const isFavorite = await isAlreadyFavorite(id);
    if (isFavorite) {
      removeItemLocalStorage(id);
      setisFavorite(false);
    } else {
      setItemLocalStorage(id, id);
      setisFavorite(true);
    }
  };

  const isAlreadyFavorite = async (id: string) => await getItemLocalStorage(id);

  return { isFavorite, updateFavoriteLaunch };
};

export const useLaunches = () => {
  const [upcomingLaunchesData, setUpcomingLaunchesData] = useState<any[]>([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    getUpcomingLaunchesData().then((data) => {
      setUpcomingLaunchesData(data);
      setisLoading(false);
    });
  }, []);

  return { upcomingLaunchesData, isLoading };
};
