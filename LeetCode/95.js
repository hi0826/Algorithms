/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

class TreeNode {
    constructor(val = null, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const generateTrees = n => {
    const root = new TreeNode(n);
    const answer = [];
    console.log(root); 

    for(let i = 1; i <= n; ++i) {
        makeTree(answer, n);
    }
};

const recursion = n => {

}

const makeTree = (answer, n) => {
    if(n === null) return;
    else answer.push(n);
    makeTree(answer, n.left);
    makeTree(answer, n.right);
}


generateTrees(1);