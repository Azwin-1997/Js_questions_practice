/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var Arr = []
    var currentSum = 0
    for(i=0;i<nums.length;i++){
    currentSum+=nums[i]
    Arr.push(currentSum)
    }
    return Arr
};