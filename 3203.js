//3203. Find Minimum Diameter After Merging Two Trees
//Hard
//Took help (Editorial + Neetcode)
//Beats 83%
//Took a whole fucking day

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    function adj_builder(edges){
        let adj = {};
        for(let [n1,n2] of edges){

            if(adj[n1] == undefined){
                adj[n1] = [n2];
            }else adj[n1].push(n2);

            if(adj[n2] == undefined){
                adj[n2] = [n1];
            }else adj[n2].push(n1);

        }
        return adj;
    }
    let adj1 = adj_builder(edges1);
    let adj2 = adj_builder(edges2)
    
    function find_diameter(cur, par, adj){
        let maxDepth1 = 0;
        let maxDepth2 = 0;
        let diameter = 0;
        for(neighbor of adj[cur] || [] ){
            if(neighbor == par) continue;

            const [child_diameter, depth] = find_diameter(neighbor, cur, adj);

            diameter = Math.max(diameter, child_diameter);

            if(depth > maxDepth1){
                maxDepth2 = maxDepth1;
                maxDepth1 = depth;
            }else if(depth > maxDepth2){
                maxDepth2 = depth;
            };
        ;}
        diameter = Math.max(diameter, maxDepth1 + maxDepth2);
        return [diameter, maxDepth1 + 1];
    }

    let [diam1] = find_diameter(0, -1, adj1);
    let [diam2] = find_diameter(0, -1, adj2);

    return(Math.max( diam1, diam2, Math.ceil(diam1/2) + Math.ceil(diam2/2) + 1 ));
};
