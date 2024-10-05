/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for(let i = 0; i < t.length; i++) {
        let index = s.indexOf(t[i]);  
        if(index === -1) {  
            return t[i];  
        } else {
            s = s.slice(0, index) + s.slice(index + 1);  
        }
    }
};