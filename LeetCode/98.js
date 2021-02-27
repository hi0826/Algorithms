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
var isValidBST = function (root) {
    const isBST = (root) => {
        if (root.left === null && root.right === null) return true;
        const leftVal = root.left ? root.left.val : null;
        const rightVal = root.right ? root.right.val : null;
        if (leftVal !== null) return false;
        if (rightVal !== null) return false;
        if (root.left !== null) 
            const leftBST = isBST(root.left);
        if (root.right !== null) 
            const rightBST = isBST(root.right);
        return leftBST & rightBST;
    }
    return isBST(root);
};