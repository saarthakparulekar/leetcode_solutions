//502. IPO (Hard)
//Solved on own, with two different solutions

//With using two heaps
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let projects = new PriorityQueue((a,b) => a[0] - b[0]);
    for(let i = 0; i < profits.length; i++){
        projects.enqueue([capital[i], profits[i]])
    }
    
    let done = 0;
    let pq = new MaxPriorityQueue();
    while(done < k){
        while(!projects.isEmpty() && projects.front()[0] <= w){
            pq.enqueue(projects.dequeue()[1]);
        };
        if(!pq.isEmpty()){
            w += pq.dequeue();
            done++;
        }else break;
    };
    return w;
};

//With using one heap and sorting
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let projects = [];
    for(let i = 0; i < profits.length; i++){
        projects.push([capital[i], profits[i]])
    }
    projects.sort((a,b) => a[0] - b[0]);
    
    let done = 0;
    let ind = 0;
    let pq = new MaxPriorityQueue();
    while(done < k){
        while(ind < projects.length && projects[ind][0] <= w ){
            pq.enqueue(projects[ind][1]);
            ind++;
        };
        if(!pq.isEmpty()){
            w += pq.dequeue();
            done++;
        }else break;
    };
    return w;
};
