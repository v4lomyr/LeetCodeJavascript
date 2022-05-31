var isValid = function (s) {
  if (s.length < 2 || s.length == null) return false;

  const map = new Map([
    [']', '['],
    ['}', '{'],
    [')', '('],
  ]);

  let parentheses = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (parentheses.pop() != map.get(s[i])) return false;
    } else {
      parentheses.push(s[i]);
    }
  }
  return parentheses.length == 0;
};
