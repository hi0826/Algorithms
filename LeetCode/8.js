/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
    let sign = "";
    let numStr = "";
    for(let c of s) {
        if(c === " ") {
            if(numStr !== "") break;
            if(sign !== "") break;
            continue;
        }
        else if(isNaN(c) === false) numStr += c;
        else {
            if(c === "+" || c === "-") {
                if(sign !== "") break;
                else if(numStr !== "") break;
                sign = c;
            } else if(sign !== "") break;
            else break;
        }
    }
    numStr = sign + numStr;
    if(Number(numStr) < Math.pow(-2, 31)) return Math.pow(-2, 31);
    if(Number(numStr) > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    return Number(numStr) || 0;
};

console.log(myAtoi("  +  413"));