let nums = [];
let target = 0;

const twoSum = function (nums, target) {
  // let result = [];

  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = nums.length - 1; j > i; j--) {
  //       if (nums[i] + nums[j] == target) {
  //           result.push(i);
  //           result.push(j);
  //           break
  //       }
  //   }
  // }

  // return result;

  // Time Complexity O(n), Space Complexity O(n)
  const map = new Map();
  map.set(nums[0], 0);
  for (let i = 1; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
    map.set(nums[i], i);
  }
  return [];

  // map is faster for searching
};
