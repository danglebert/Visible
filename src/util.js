export const strToQuery = str =>
  str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '+');
