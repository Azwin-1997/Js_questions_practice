/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var newAdd = address.replaceAll(".","[.]")
    return newAdd
};