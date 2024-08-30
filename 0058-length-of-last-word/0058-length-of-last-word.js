/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
        let x = s.trim()
        let newArr = x.split()
        let newArr1 = newArr[0].split(" ")
       
        
        let lastWord = newArr1[newArr1.length-1]
        return lastWord.length
    
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));