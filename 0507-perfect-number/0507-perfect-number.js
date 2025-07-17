/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let count = 0
    for(i=1;i<num;i++){
        if(num%i==0){
            count+=i
        }
    }
    if(count==num){
        return true
    }else{
        return false
    }
    
};