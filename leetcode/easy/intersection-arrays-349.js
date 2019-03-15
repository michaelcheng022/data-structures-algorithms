/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  var intersect = [];

  if (set1.size <= set2.size) {
    for(const prop of set1) {
      if (prop in set2) {
        intersect.push(prop);
      }
    }
  } else if (set1.size > set2.size) {
    for (const prop of set2) {
      if (prop in set1) {
        intersect.push(prop);
      }
    }
  }
  
  return intersect;

};

console.log(intersection([4,9,5], [9,4,9,8,4]));