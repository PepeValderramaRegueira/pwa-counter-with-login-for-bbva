export const formatNumberWithZeros = (number, limit = 10) => (
  number < limit ? `0${number}` : number
);
