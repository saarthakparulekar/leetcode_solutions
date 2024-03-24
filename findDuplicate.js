var findDuplicate = function(nums) {
 let duplicate = new Set()
    for(let num  of nums){
        if(!duplicate.has(num)){
            duplicate.add(num)
        }else{
            return num
        }
    }
};

//Could be better
