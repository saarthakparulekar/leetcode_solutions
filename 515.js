//515. Find Largest Value in Each Tree Row
//Beats 92%, solved on own, solved within 9 mins 
//Good work :P
//BFS

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if(root == null) return []
    let queue = [root];
    let res = [];
    while(queue.length > 0){
        let n = queue.length;
        let max = -Infinity;
        for(let i = 0; i < n; i++){
            let node = queue.shift();
            max = Math.max(max, node.val)
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right)
        };
        res.push(max);
    }
    return res;
};
