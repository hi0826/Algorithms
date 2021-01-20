/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const arr = s.replace(/ /g, "").split('');
    if(arr.length === 0) return 0;
    // + - * /
    // * / 가 우선순위므로 만나면 계산
    const number = [];
    let curNumber = '';
    let operator = '+';
    for(let i = 0; i < arr.length; ++i) {
        let e = arr[i];
        console.log(e);
        if(isNaN(Number(e)) === false) {
            curNumber += e;
        }
        if(isNaN(Number(e)) === true || i === arr.length-1) {
            if(operator === "+") number.push(+curNumber);
            else if(operator === "-") number.push(-1 * +curNumber);
            else if(operator === "*") number.push(number.pop() * +curNumber);
            else if(operator === "/") number.push(parseInt(number.pop()/ +curNumber));
            operator = e;
            curNumber = '';
        }
        console.log(`curNumber : ${curNumber}`);
        console.log(`operator : ${operator}`);
        console.log(number);
    }
    return number.reduce((res, cur) => res + cur, 0);
};

calculate("3+2*2");