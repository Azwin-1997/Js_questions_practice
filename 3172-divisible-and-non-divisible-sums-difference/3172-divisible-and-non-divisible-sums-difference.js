/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
let divSum = 0
let notDivSum = 0

    for(i=1;i<=n;i++){
        if(i%m==0){
            divSum+=i
        }else{
            notDivSum+=i
        }
       var sumDiff = notDivSum - divSum
    }
   return sumDiff
    
};