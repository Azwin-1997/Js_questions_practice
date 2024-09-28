/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var Arr = []
    for(i=0;i<accounts.length;i++){
        var sum = accounts[i].reduce((acc,curr)=>{
            return acc + curr
        })
        Arr.push(sum)
    }
    var newArr = Arr.sort(function(a, b){return a-b})
   
    return newArr[newArr.length-1]
};