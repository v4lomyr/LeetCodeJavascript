var climbStairs = function (n) {
  let pointer1 = 1,
    pointer2 = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = pointer1;
    pointer1 += pointer2;
    pointer2 = temp;
  }
  return pointer1;
};
