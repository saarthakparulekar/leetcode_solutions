/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let hash = {};
    for(let char of word){
        if(hash[char] != undefined){
            hash[char]++;
        }else hash[char] = 1;
    }
    let order = Object.values(hash);
    order.sort((a,b)=>b-a);
    let push = 0;
    for(let i = 0; i < order.length;i++){
        if(i < 8){
            let cost = order[i];
            push += cost;
        }else if(i >= 8 && i < 16){
            let cost = 2 * order[i];
            push += cost;
        }else if(i >= 16 && i < 24){
            let cost = 3 * order[i];
            push += cost;
        }else{
            let cost = 4 * order[i];
            push += cost;
        }
    }
    return push;
};
