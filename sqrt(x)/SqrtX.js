/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 0,
    end = Number.MAX_VALUE,
    result = 0;
  while (start <= end) {
    const middle = start + Math.floor((end - start) / 2);
    if (middle * middle <= x) {
      result = middle;
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return result;
};
