/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    let answer = "";
    if(strs.length === 0) return answer;
    strs.sort((a, b) => a.length - b.length);
    const short = strs[0];
    
    for(let i = 1 ; i <= short.length; ++i) {
        const prefix = short.substring(0, i);
        let isTrue = true;
        for(let s of strs) {
            console.log(prefix);
            console.log(s);
            console.log(s.indexOf(prefix));
            if(s.indexOf(prefix) !== 0) isTrue = false;
        }
        if(isTrue) answer = prefix;
        else break;
    }

    console.log(answer);
    return answer;
}

longestCommonPrefix(["a", "ab"])