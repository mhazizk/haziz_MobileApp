/**
 * Removes delimiter and destringifies a string into a number
 *
 * @param str - string to be destringified
 * @returns number
 *
 * @example
 * removeDelimiterAndDestringify("1.000.000")
 * returns 1000000
 */
const removeDelimiterAndDestringify = (str) => {
  const delimiter = ".";
  const joined = str.split(delimiter).join("");
  const result = parseInt(joined);
  return result;
};

export default removeDelimiterAndDestringify;
