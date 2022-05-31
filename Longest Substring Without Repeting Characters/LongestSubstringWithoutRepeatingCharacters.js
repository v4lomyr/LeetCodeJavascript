//@param {string} s
//return {number}

var lengthOfLongestSubstring = function (s) {
  let set = new Set([]);
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j]);
        let temp = set.size;
        if (maxCount < temp) maxCount = temp;
      } else {
        set = new Set([]);
        break;
      }
    }
  }
  return maxCount;
};
