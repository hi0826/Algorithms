/**
 * @param {string} s
 * @return {number}
 */
// DP
const longestValidParentheses = (s) => {
    const memo = new Array(s.length).fill(0);
    let max = 0;
    for(let i = 1; i < s.length; ++i) {
        if(s[i] === ")") {
            if(s[i-1] === "(") {
                memo[i] = (i >= 2 ? memo[i-2] : 0) + 2;
            } else if(i-memo[i-1]-1 >= 0 && s[i-memo[i-1]-1] === "(") {
                memo[i] = memo[i-1] + ((i-memo[i-1]) >= 2 ? memo[i-memo[i-1]-2] : 0) + 2;
            }
        }
        max = Math.max(max, memo[i]);
    }
    console.log(max);
    return max
};

longestValidParentheses("(()())");