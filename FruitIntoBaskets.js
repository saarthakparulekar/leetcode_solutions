//904. Fruit Into Baskets
//Sliding Window + Hash Table
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let set = {};
    let setSize = 0;
    let l = 0;
    let res = 0;
    for(let r = 0; r < fruits.length; r++){
        if(set[fruits[r]] == undefined && setSize < 2){
            set[fruits[r]] = 1;
            setSize++;
        }else if(set[fruits[r]] == undefined && setSize == 2){
            res = Math.max(res, (r - l));
            while(setSize == 2){
                set[fruits[l]]--;
                if(set[fruits[l]] == 0){
                    delete set[fruits[l]];
                    setSize--;
                };
                l++;
            };
            set[fruits[r]] = 1;
            setSize++;
        }else{
            set[fruits[r]]++;
        }
    };
    res = Math.max(res, (fruits.length - l));
    return res;
};
