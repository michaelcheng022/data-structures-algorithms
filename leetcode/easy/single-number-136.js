/*
 * @param {number[]} nums
 * @return {number}
 */

var nums = [4,1,2,1,2];
 var singleNumber = function(nums) {
  var count = {}; // hash map
  for(let i = 0; i < nums.length; i++) {
      if(count.hasOwnProperty(nums[i])) {
          count[nums[i]]++;
      } else {
          count[nums[i]] = 1;
      }
  }
  for(var key in count) {
      if(count[key] === 1) {
          return key;
      }
  }
};

console.log(singleNumber(nums));