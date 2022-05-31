var isPalindrome = function (x) {
  // Original Approach
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;

  let xInString = x.toString();
  console.log(xInString);
  let left = Math.ceil((xInString.length - 1) / 2);
  let right = Math.floor((xInString.length - 1) / 2);
  while (left >= 0 || right <= xInString.length) {
    if (xInString[right] != xInString[left]) {
      return false;
    }
    left--;
    right++;
  }
  return true;

  // Better Approach without converting given number to string

  // let revertedNumber = 0;
  // while(x > revertedNumber) {
  //     revertedNumber = (revertedNumber * 10) + (x % 10)
  //     x = Math.floor(x / 10)
  // }
  // return x == revertedNumber || x == Math.floor(revertedNumber / 10)
};
