/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map([
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
  ]);

  const normalMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'I' || s[i] == 'X' || s[i] == 'C') {
      if (map.has(s[i] + s[i + 1])) {
        count += map.get(s[i] + s[i + 1]);
        i++;
      } else {
        count += normalMap.get(s[i]);
      }
    } else {
      count += normalMap.get(s[i]);
    }
  }

  return count;
};
