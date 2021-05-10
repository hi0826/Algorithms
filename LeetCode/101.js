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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    const recursive = (tree1, tree2) => {
        if(tree1 === null && tree2 === null) return true;
        if(tree1 === null || tree2 === null) return false;
        return (tree1.val === tree2.val) 
            && recursive(tree1.left, tree2.right) 
            && recursive(tree1.right, tree2.left);
    }
    
    return recursive(root.left, root.right);
};