//Easy
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(root1 == null && root2 == null){
        return null;
    }
    let root = new TreeNode();
    root.val += (root1 != null)? root1.val : 0;
    root.val += (root2 != null)? root2.val : 0;

    root.left = mergeTrees(
        root1 != null ? root1.left : null,
        root2 != null ? root2.left : null
    )

    root.right = mergeTrees(
        root1 != null ? root1.right : null,
        root2 != null ? root2.right : null
    )
    return root;
};
