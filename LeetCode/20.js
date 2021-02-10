/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const answer = [];
    for(let char of s) {
        if(char === '(' || char === '[' || char === '{') {
            answer.push(char);
        } else if(char === ')') {
            if(answer[answer.length-1] === '(') {
                answer.pop();
            } else
                return false;
        } else if(char === ']') {
            if(answer[answer.length-1] === '[') {
                answer.pop();
            } else
                return false;
        } else if(char === '}') {
            if(answer[answer.length-1] === '{') {
                answer.pop();
            } else
                return false;
        }
    }
    if(answer.length === 0)
        return true;
    return false;  
};