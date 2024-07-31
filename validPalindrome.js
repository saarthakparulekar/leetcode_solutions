//NEW SOLUTION BEATS 80% AND SOLVED ON OWN
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let pal = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let i = 0;
    let j = pal.length-1;
    while(i < j){
        if(pal[i] != pal[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};
//OLD SOLUTION
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
let l = 0;
let r = s.length - 1;
let lchar;
let rchar;

while(l < r){
    lchar = s[l];
    rchar = s[r];
    if(!/[a-zA-Z0-9]/.test(lchar)){
        l++;
    }else if(!/[a-zA-Z0-9]/.test(rchar)){
        r--;
    }else{
        if(lchar.toLowerCase() != rchar.toLowerCase()){
            return false;
        }
        l++;
        r--;
    }
}
return true
};

//uses regular expression 
//time complexity is 52ms
//Uses Two Pointer method
