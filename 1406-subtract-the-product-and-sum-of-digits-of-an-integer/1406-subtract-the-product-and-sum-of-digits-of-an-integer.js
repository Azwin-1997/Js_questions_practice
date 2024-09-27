/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var num = n.toString().split("")
    var sum = num.reduce((acc,curr)=>{ return Number(acc)+ Number(curr)
    })
    var mult = num.reduce((acc,curr)=>{ return Number(acc) * Number(curr)
    })
    var diff = mult - sum
    return diff
    
};