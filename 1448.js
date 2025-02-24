//1448. Count Good Nodes in Binary Tree
//Solved on own
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
var goodNodes = function(root) {
    let goodNodes = 0;
    function dfs(root, max){
        if(root.val >= max){
            goodNodes++;
            max = Math.max(max, root.val);
        }

        if(root.left) dfs(root.left, max);
        if(root.right) dfs(root.right, max);

        return goodNodes;
    }
    return dfs(root, root.val);
};
