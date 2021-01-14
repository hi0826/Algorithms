const lengthOfLongestSubstring = s => {
    if(s.length <= 1) return s.length;
    const answer = new Set();
    for(let i = 0; i < s.length; ++i) {
        let str = "";
        for(let j = i ; j < s.length; ++j) {
            if(str.indexOf(s[j]) === -1) {
                str += s[j];
            } else {
                answer.add(str);
                str = "";
                break;
            }
        }
        if(str !== "") answer.add(str);
    }
    return Math.max(...Array.from(answer).map(v => v.length));
};

console.log(lengthOfLongestSubstring("au"));