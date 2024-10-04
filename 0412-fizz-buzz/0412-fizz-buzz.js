/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var newArr = []
    
    for(i=1;i<=n;i++){
        newArr.push(i.toString())
    }
    for(j=0;j<newArr.length;j++){
        if(newArr[j]%3==0 && newArr[j]%5==0){
            newArr[j]="FizzBuzz"
        }else if(newArr[j]%3==0){
            newArr[j]="Fizz"
        }else if (newArr[j]%5==0){
            newArr[j]="Buzz"
        }
    }
    return newArr
    
};