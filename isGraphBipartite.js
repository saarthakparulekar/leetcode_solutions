//785. Is Graph Bipartite?
//Took help at first, but solved on own later
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let n = graph.length;
    let odd = new Array(n);

    function bipartite(i){
        if(odd[i]){
            return true;
        };
        let q = [i];
        odd[i] = -1;
        while(q.length > 0){
            let node = q.shift();
            for(let nei of graph[node]){
                if(odd[nei] == odd[node]){
                    return false
                }else if(!odd[nei]){
                    odd[nei] = -1 * odd[node];
                    q.push(nei);
                };
            };
        };
        return true;
    }
    for(let i = 0; i < n; i++){
        if(!bipartite(i)){
            return false
        };
    };
    return true;
};
