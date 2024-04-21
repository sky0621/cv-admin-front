export const toYM = (year: number, month: number) => {
  const y = String(year);
  const m = month < 10 ? "0" + month : month;
  return Number(y + m);
};
