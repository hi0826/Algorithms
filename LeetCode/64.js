const minPathSum = grid => {
    const memo = Array.from({length : grid.length}, (v, k) => v = new Array(grid[0].length).fill(null));
    memo[0][0] = grid[0][0];

    for(let i = 1; i < grid.length; ++i)
        memo[i][0] = memo[i-1][0] + grid[i][0];
    
    for(let i = 1; i < grid[0].length; ++i)
        memo[0][i] = memo[0][i-1] + grid[0][i];

    for(let i = 1 ; i < grid.length; ++i) {
        for(let j = 1; j < grid[i].length; ++j) {
            if(memo[i][j-1] < memo[i-1][j]) memo[i][j] = memo[i][j-1] + grid[i][j];
            else memo[i][j] = memo[i-1][j] + grid[i][j]; 
        }
    }
    return memo[memo.length-1][memo[0].length-1];
}

minPathSum([[1,2,3],[4,5,6]]);