/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(" ");
    let sortedArray = new Array(words.length);
    for (let word of words) {
        let position = parseInt(word[word.length - 1]) - 1;
        sortedArray[position] = word.slice(0, -1);
    }
    return sortedArray.join(" ");
};

