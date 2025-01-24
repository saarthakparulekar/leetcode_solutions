//802. Find Eventual Safe States
//Took help
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let safe = {};
    let result = [];
    //recursive function
    function dfs(node){
        if(safe[node] != undefined){
            return safe[node];
        };
        safe[node] = false;
        for(let child of graph[node]){
            if(!dfs(child)){
                return safe[node];
            };
        };
        safe[node] = true;
        return safe[node];
    };
    //loop
    for(let i = 0; i < graph.length; i++){
        if(dfs(i) == true)result.push(i);
    };
    return result;
};
