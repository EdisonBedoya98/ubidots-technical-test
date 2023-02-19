export const dateToUTC = (date: string) => {
  return new Date(date).toUTCString();
};
