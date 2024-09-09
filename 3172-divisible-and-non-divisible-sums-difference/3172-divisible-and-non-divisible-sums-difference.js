var differenceOfSums = function(n, m) {
    var divisibleArr = []
    var nonDivisibleArr = []
    for(i=1;i<=n;i++){
        if(i%m!==0){
            divisibleArr.push(i)
        }else{
            nonDivisibleArr.push(i)
        }
        
    }
   
    var newArr1 = divisibleArr.reduce((acc,curr)=>{
        return acc+curr
    },0)
    
    var newArr2 = nonDivisibleArr.reduce((acc,curr)=>{
        return acc+curr
    },0)
    
    var diff = newArr1-newArr2
    return diff
     
    
};
console.log(differenceOfSums(10,3))