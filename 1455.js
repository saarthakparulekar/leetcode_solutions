//1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
//Solved on own and in 3 mins 14 secs
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let temp = sentence.split(' ');
    for(let i = 0; i < temp.length; i++){
        let word = temp[i];
        if(word.slice(0,searchWord.length) === searchWord){
            return i+1;
        }
    }
    return -1;
};
