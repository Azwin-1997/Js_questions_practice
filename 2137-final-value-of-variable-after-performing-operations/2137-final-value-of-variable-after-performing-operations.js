/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    var x = 0;
    for (var i = 0; i < operations.length; i++) {
        if (operations[i] === "X++" || operations[i] === "++X") {
            x += 1;
        } else if (operations[i] === "--X" || operations[i] === "X--") {
            x -= 1;
        }
    }
    return x;
};