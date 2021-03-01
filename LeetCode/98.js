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
const isValidBST = (root) => {
    const isBST = (root, low, high) => {
        if(root === null) return true;
        if((low !== null && root.val <= low) || (high !== null && root.val >= high)) return false;
        return isBST(root.left, low, root.val) && isBST(root.right, root.val, high);
    }
    return isBST(root, null, null);
};