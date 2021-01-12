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
    if(n === 0) return new TreeNode();
    return recursion(1, n);
};

const recursion = ( start, end ) => {
    if( start === end ) {
        return [new TreeNode(start)];
    }
    const answer = [];
    // i : root
    // start ~ i : left
    // i ~ end : right
    for(let i = start ; i <= end; ++i) {
        let left = [], right = [];
        if(i !== start)
            left = recursion(start, i-1);
        else
            left.push(null);
        if(i !== end)
            right = recursion(i+1, end);
        else
            right.push(null);
        for(let j = 0; j < left.length; ++j) {
            for(let k = 0; k < right.length; ++k) {
                const node = new TreeNode(i);
                node.left = left[j];
                node.right = right[k];
                answer.push(node);
            }
        }
    }
    return answer;
}

generateTrees(3);