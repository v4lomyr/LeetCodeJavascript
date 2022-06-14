/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let substring = '';
  let substringLength = 0;
  for (let i = 0; i < s.length; i++) {
    // check for string with even length
    let left = i;
    let right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > substringLength) {
        substring = s.substring(left, right + 1);
        substringLength = right - left + 1;
      }
      left -= 1;
      right += 1;
    }

    // check for string with odd length
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > substringLength) {
        substring = s.substring(left, right + 1);
        substringLength = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }
  return substring;
};
