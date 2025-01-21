//2483. Minimum Penalty for a Shop
//Solved on own (prefix sum)
//Solved in 8 mins
/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let sum = 0;
    for(let customer of customers){
        if(customer == 'Y') sum++; 
    };
    let penalty = sum;
    let min = penalty;
    let hour = 0;
    for(let i = 0; i < customers.length; i++){
        if(customers[i] == 'Y'){
            penalty--;
            if(penalty < min){
                min = penalty;
                hour = i + 1;
            };
        }else{
            penalty++;
        };
    };
    return hour;
};
