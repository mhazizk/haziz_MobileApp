/**
 * Convert number to string with number delimiter only
 *
 * @param number - number to be formatted
 * @returns formatted number
 *
 * @example
 * addNumberDelimiterOnlyAndStringify(1000000)
 * returns "1.000.000"
 */
const addNumberDelimiterOnlyAndStringify = (number) => {
  const numberString = number.toString();

  const arr = numberString.split("");
  let isNegative = false;
  if (arr[0] === "-") {
    isNegative = true;
    arr.shift();
  }

  const arrWithDelimiter = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arrWithDelimiter.push(arr[i]);

    if ((arr.length - i) % 3 === 0 && i !== 0) {
      arrWithDelimiter.push(".");
    }
  }

  if (isNegative) arrWithDelimiter.push("-");

  const result = arrWithDelimiter.reverse().join("");
  return result;
};

export default addNumberDelimiterOnlyAndStringify;
