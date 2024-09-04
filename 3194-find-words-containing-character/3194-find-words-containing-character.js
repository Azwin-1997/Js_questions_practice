var findWordsContaining = function(words, x) {
    var newArr = []
    for(i=0;i<words.length;i++){
       if(words[i].includes(x)){
           newArr.push(i)
       }
          
       } if(newArr.length === 0){
           return []
       }else{
           return newArr
       }
    

};
console.log(findWordsContaining(["ac","cd","aaaa","cc"],"b"))