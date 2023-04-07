/**
 * Removes delimiter and keep the string
 *
 * @param str - string to be removed delimiter
 * @returns number
 *
 * @example
 * removeDelimiterAndStringify("1.000.000")
 * returns "1000000"
 */
const removeDelimiterAndStringify = (str) => {
  const delimiter = ".";
  const joined = str.split(delimiter).join("");
  return joined;
};

export default removeDelimiterAndStringify;
