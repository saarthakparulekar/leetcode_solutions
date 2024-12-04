//2825. Make String a Subsequence Using Cyclic Increments
//Took 30 mins but solved on own
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let i = 0;
    let j = 0;
    if(str1.length < str2.length){
        return false;
    }
    while(j < str2.length && i < str1.length){
        if(str1[i] == str2[j]){
            i++;
            j++;
        }else {
            let temp = ''
            if(str1[i] == 'z'){
                temp = 'a';
            }else{
                temp = String.fromCharCode((str1.charCodeAt(i)+1));
            }
            if(temp == str2[j]){
                i++;
                j++;
            }else i++;
        }
    }
    if(j == str2.length){
        return true;
    }else return false;
};
