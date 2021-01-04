let memo;
let maxLength = -1;
const longestPalindrome = (s) => {
    let answer = "";
    memo = new Array(s.length).fill(-1);
    memo = memo.map(v => v = new Array(s.length).fill(-1));
    for(let i = 0; i < s.length; ++i) {
        for(let j = 0; j < s.length; ++j) {
            const res = isPalindrome(s, i, j);
            if(res === 1) {
                const length = Math.abs(j - i);
                if(maxLength < length) {
                    answer = s.substr(i, j-i+1);
                    maxLength = length;
                }
            }
        }
    }
    return answer;
}

const isPalindrome = (s, start, end) => {
    // memo[i][j] : i ~ j 까지가 palindrome 인가?
    // 탐색한 구간인 경우
    if(memo[start][end] !== -1) 
        return memo[start][end];  

    // 같은 인덱스 참조
    if(end-start === 0) 
        return memo[start][end] = 1;
    
    // 붙어있는 인덱스
    else if(Math.abs(end-start) === 1) {
        if(s[start] === s[end]) return memo[start][end] = memo[end][start] = 1;
        else return memo[start][end] = memo[end][start] = 0;
    }

    // 나머지
    else {
        const res = isPalindrome(s, start+1, end-1);
        if(res === 1 && s[start] === s[end]) {
            return memo[start][end] = memo[end][start] = 1;
        }
    }
    return memo[start][end] = memo[end][start] = 0;
}

longestPalindrome("cbbd");