const permuteUnique = (nums) => {
    return backTracking(nums);
};

const backTracking = (nums) => {
    
    const answer = [];
    const dp = (answer, tempArr, nums) => {
        if(nums.length === 0) {
            if( answer.has(tempArr) === false )
                answer.push(tempArr);
            return;
        }
        for(let i = 0; i < nums.length; ++i) {
            const t = tempArr.slice();
            t.push(nums[i]);
            dp(answer, [...t], nums.filter((v, index) => index !== i));
        }
    };

    dp(answer, [], nums);
    return answer;
}

Array.prototype.has = function(arr) {
    if(this.length === 0) return false;
    for(let e of this) {
        let equal = true;
        for(let i = 0 ; i < e.length; ++i) {
            if(e[i] !== arr[i]) equal = false;
            else if(e[i] === arr[i] && equal !== false) equal = true;
        }
        if(equal === true) return true;
    }
    return false;
}