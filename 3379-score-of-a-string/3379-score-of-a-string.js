/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    var newArr=[]
    for(i=0;i<s.length;i++){
        newArr.push(s.charCodeAt(i))
    }
    var sum = []
    for(j=0;j<newArr.length-1;j++){
        sum.push(Math.abs(newArr[j]- newArr[j+1]))
    }
    let diff = sum.reduce((acc,curr)=>{
        return acc +  curr
    })
    return diff
    
};