
let cur = false;
let memo = [];
const isMatch = function(s, p) {
    initMemo(s.length, p.length);
    
}

const initMemo = function(sLen, pLen) {
    const property = new Array(pLen).fill(null);
    for(let i = 0; i < sLen; ++i) {
        memo.push(property);
    }
}

const res = isMatch("abcd", "d*");
console.log(res);