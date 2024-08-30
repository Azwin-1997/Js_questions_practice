/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    var arr = []
    for(i=0;i<nums.length;i++){
        arr.push(nums[i])
       
}
let newArr = arr.concat(nums)
return newArr
};
console.log(getConcatenation([1,2,1]))