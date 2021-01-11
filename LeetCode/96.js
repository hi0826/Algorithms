const numTrees = n => {
    const memo = new Array(n+1).fill(0);
    memo[0] = memo[1] = 1;

    dp(n, memo);
    return memo[n];
}

const dp = (n, memo) => {    
    if(memo[n] !== 0) return memo[n];

    let sum = 0;
    for(let root = 1; root <= n; ++root){
        const leftSubTree = dp(root-1, memo);
        const rightSubTree = dp(n-root, memo);
        sum += leftSubTree * rightSubTree;
    }

    if(memo[n] === 0) memo[n] = sum;
    return sum;
}