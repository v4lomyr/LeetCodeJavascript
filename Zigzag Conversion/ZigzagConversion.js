/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;

  let result = '';
  const step = (numRows - 1) * 2;
  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += step) {
      result += s[j];
      if (i > 0 && i < numRows - 1 && j + step - 2 * i < s.length) {
        result += s[j + step - 2 * i];
      }
    }
  }
  return result;
};
