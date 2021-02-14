/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const answer = [];
    
    const recursion = (str, open, close) => {
        console.log(str);
        if(str.length === n * 2) {
            answer.push(str);
            return ;
        }
        if(open < n)
            recursion(str + "(", open + 1, close);
        if(close < open)
            recursion(str + ")", open, close + 1);
    } 

    recursion("", 0, 0);
    
    console.log(answer);
    return answer;
};

generateParenthesis(3);