//Needed help for such an easy problem, I'm stupid :/
//uses recursion, TC : O(p+q)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p == null && q == null){
        return true;
    }else if(p == null || q == null || p.val !== q.val){
        return false;
    }
    return(isSameTree(p.left,q.left) && isSameTree(p.right,q.right));
};
