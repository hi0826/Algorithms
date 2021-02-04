/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if(digits.length === 0) return [];
    const number = ["", "", "abc", "def", "ghi", 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const answer = [];

    const recursion = (str, digits) => {
        if(digits.length === 0) {
            answer.push(str);
            return ;
        }
        const num = digits[0];
        for(let j = 0; j < number[num].length; ++j) {
            recursion(str + number[num][j], digits.slice(1));
        }
    }

    recursion('', digits.split(''));
    console.log(answer);
}; 

letterCombinations('23');