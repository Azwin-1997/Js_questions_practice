/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var newArr = []
    for(i=0;i<nums.length;i++){
        var count = 0
        for(j=0;j<nums.length;j++){
            if(nums[j]<nums[i]){
                count++
            }
        }
newArr.push(count)
    }
    return newArr
};