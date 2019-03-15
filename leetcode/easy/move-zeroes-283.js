/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */


var moveZeroes = function(nums) {
  for( let i = nums.length - 1; i >= 0; i--) {
    if(nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

console.log(moveZeroes([0,1,0,3,12]));