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
