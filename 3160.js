//3160. Find the Number of Distinct Colors Among the Balls
//hash map, solved on own but needed help for hsahmap
/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let res = [];
    let hash = new Map();
    let balls = new Map();
    let count = 0;
    for(let [ball,color] of queries){
        if(!balls.has(ball)){
            balls.set(ball, color);

            if(!hash.has(color)){
                hash.set(color, 1);
                count++;
            }else{
                hash.set(color, hash.get(color) + 1);
            } 

        }else{
            let temp = balls.get(ball);
            balls.set(ball,color);

            if(!hash.has(color)){
                hash.set(color, 1);
                count++;
            }else{
                hash.set(color, hash.get(color) + 1);
            } 

            hash.set(temp, hash.get(temp) - 1);
            
            if(hash.get(temp) == 0){
                hash.delete(temp);
                count--;
            }
        }
        
        res.push(count);
    };
    return res;
};
