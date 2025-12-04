/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    if (nums.length == 1){
    return nums[0]
    }
let sortedArray = nums.sort()

  return sortedArray[Math.floor(sortedArray.length / 2)];

};