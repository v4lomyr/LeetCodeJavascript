/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0];
  let currentSum = 0;
  nums.forEach((num) => {
    if (currentSum < 0) currentSum = 0;
    currentSum += num;
    result = Math.max(currentSum, result);
  });
  return result;
};
