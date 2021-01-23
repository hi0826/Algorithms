/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
    if( (s[0] !== "+" && s[0] !== "-" && s[0] !== " ") && isNaN(Number(s[0])) ) return 0; 
    let sign = "";
    let numStr = "";
    const str = s.trim();
    for(let i = 0; i < str.length; ++i) {
        if(isNaN(str[i]) === false) numStr += str[i];
        else if(isNaN(str[i]) === true) {
            if(sign !== "") return 0;
            else if(str[i] === "+") sign = "+";
            else if(str[i] === "-") sign = "-";
            else break;
        }
    }
    numStr = sign + numStr;
    let answer = Number(numStr) || 0;
    if(answer < Math.pow(-2, 31)) return Math.pow(-2, 31);
    else if(answer > Math.pow(2, 31)-1) return Math.pow(2, 31)-1;
    return answer;
};

console.log(myAtoi("+"));