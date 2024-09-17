/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    var newArr=[]
     var str = s1.concat(" " + s2).split(" ");
    for(i=0;i<str.length;i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            newArr.push(str[i])
        }
    }
    return newArr
};