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
var inorderTraversal = function(root) {
    const answer = [];
    
    const recursion = (answer, tree) => {
        if(tree === null) return ;
        recursion(answer, tree.left);
        answer.push(tree.val);
        recursion(answer, tree.right); 
    }
    
    recursion(answer, root);
    
    return answer;
};