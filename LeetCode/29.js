/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
    let answer = parseInt(dividend/divisor);
    if(answer < Math.pow(-2, 31)) return Math.pow(-2, 31);
    if(answer > Math.pow(2, 31)-1) return Math.pow(2, 31)-1;
    return answer;
};