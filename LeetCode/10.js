const isMatch = function(s, p) {
    // s : string
    // p : pattern
    // 정규식비교해서 완전 일치하면 됨
    const reg = new RegExp(p);
    const res = reg.exec(s);
    if(res) 
        return res[0] === s;
    return false;
}

isMatch("ab", ".*c");