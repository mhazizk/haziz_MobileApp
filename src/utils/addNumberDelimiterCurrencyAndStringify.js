/**
 * Convert number to string with number delimiter and currency
 *
 * @param number - number to be formatted
 * @returns formatted number
 *
 * @example
 * addNumberDelimiterCurrencyAndStringify(1000000)
 * returns "Rp. 1.000.000"
 */
const addNumberDelimiterCurrencyAndStringify = (number) => {
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

  const result = "Rp. " + arrWithDelimiter.reverse().join("");
  return result;
};

export default addNumberDelimiterCurrencyAndStringify;
