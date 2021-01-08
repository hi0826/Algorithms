const numTrees = n => {
    let answer = 0;
    if(n <= 2) return n;
    for(let i = n ; i > n/2 ; --i) {
        answer += i;
    }
    if(n %2 === 0) answer += n/2;
    return answer;
}

console.log(numTrees(3));