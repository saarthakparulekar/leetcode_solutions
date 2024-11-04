/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let i = 0;
    let comp = '';
    while(i < word.length){
        let char = word[i];
        let count = 0;
        while(word[i] == char && count < 9 && i < word.length){
            count++;
            i++;
        }
        comp += String(count);
        comp += char
    }
    return comp;
};
