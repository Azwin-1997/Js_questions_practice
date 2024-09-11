/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let arr = num.toString().split("");
    var newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== "") {
            newArr.push(parseInt(arr[i]));
        }
    }
    var sum = newArr.reduce((acc, curr) => acc + curr, 0);
    if (sum < 10) {
        return sum;
    }
    return addDigits(sum);
};

console.log(addDigits(2)); // Output: 2
