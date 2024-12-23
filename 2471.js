//2471. Minimum Number of Operations to Sort a Binary Tree by Level
//Took help from Neetcode, but learnt a lot
//Need to be careful about swapping
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
 * @return {number}
 */
var minimumOperations = function(root) {
    let queue = [root];
    let count = 0;
    while(queue.length > 0){
        let level = [];
        let n = queue.length;
        for(let i = 0; i < n; i++){
            let node = queue.shift();
            level.push(node.val);
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        };
        let sorted = level.toSorted((a,b) => a-b);
        let hash = {};
        for(let i = 0; i < level.length; i++){
            hash[level[i]] = i;
        }
        for(let i = 0; i < sorted.length; i++){
            if(level[i] !== sorted[i]){
                count++;
                let j = hash[sorted[i]];

                let temp = level[i];
                level[i] = level[j];
                level[j] = temp;
                
                hash[level[i]] = i;
                hash[level[j]] = j;
            }
        }
    }
    return count;
};
