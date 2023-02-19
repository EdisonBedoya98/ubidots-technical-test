export const getNextLaunchCounterData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API + "/launches/next");
  const data = await res.json();
  return data;
};
export const getUpcomingLaunchesData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API + "/launches/upcoming");
  const data = await res.json();
  return data;
};

export const setItemLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeItemLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
