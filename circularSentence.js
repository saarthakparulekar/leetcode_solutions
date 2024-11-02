/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let temp = sentence.split(' ');
    for(let i = 0; i < temp.length; i++){
        if(i == temp.length - 1){
            let curr = temp[i];
            let next = temp[0];
            if(curr[curr.length - 1] !== next[0]){
                return false
            }
        }else{
            let curr = temp[i];
            let next = temp[i+1];
            if(curr[curr.length - 1] !== next[0]){
                return false
            }
        }
    }
    return true;
};
