/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   var Number = nums.sort()
   for(i=0;i<Number.length;i+=2){
       if(Number[i]!==Number[i+1]){
           return Number[i]
       }
   }
   
    
};
console.log(singleNumber([2,2,1]))