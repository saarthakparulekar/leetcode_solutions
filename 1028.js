// 1028. Recover a Tree From Preorder Traversal
// HARD
// Took intuition from neetcode, implemented on own;
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    //Dashes represent the level
    let dashes = 0;
    //Stack to store the parent node at each level
    let stack = [];
    //loop through the traversal (string)\
    let i = 0;
    while(i < traversal.length){
        if(traversal[i] !== '-'){
            let str = traversal[i];
            while(traversal[i + 1] !== '-' && i+1 < traversal.length){
                i++;
                str += traversal[i];
            };
            if(dashes == 0){
                stack.push(new TreeNode(Number(str)));
            }else{
                while(dashes !== stack.length){
                    stack.pop();
                };
                let temp = new TreeNode(Number(str));
                if(stack[stack.length - 1].left){
                    stack[stack.length - 1].right = temp;
                }else{
                    stack[stack.length - 1].left = temp;
                }
                stack.push(temp);
                dashes = 0;
            }
        }else{
            dashes++;
        }
        i++;
    };
    return stack[0];
};
