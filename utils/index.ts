export const decorateNum = (num: number) => {
  const k = 1000;
  const m = 1000000;
  let res = num.toString();
  if (num >= k) res = (num / k).toFixed(1) + "k";
  if (num >= m) res = (num / m).toFixed(1) + "m";
  return res;
};
