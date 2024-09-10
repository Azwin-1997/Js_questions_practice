/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    var Arr =[]
    var kelvin = celsius + 273.15
    Arr.push(kelvin)
    var fahrenheit = celsius *1.80+32.00
    Arr.push(fahrenheit)
    return Arr
    
};
