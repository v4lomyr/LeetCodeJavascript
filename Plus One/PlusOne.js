/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits.reverse();
  let carry = 1,
    indice = 0;
  while (carry > 0) {
    if (indice < digits.length) {
      if (digits[indice] === 9) {
        digits[indice] = 0;
      } else {
        digits[indice] += carry;
        carry = 0;
      }
    } else {
      digits.push(carry);
      carry = 0;
    }
    indice++;
  }
  digits.reverse();
  return digits;
};
