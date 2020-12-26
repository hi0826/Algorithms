const longestConsecutive = (nums) => {
    nums.sort((a, b) => a-b);
    let curLength = 0;
    let maxLength = 0;
    for(let i = 0 ; i < nums.length; ++i) {
        console.log(`for`);
        if(nums[i] - nums[i-1] === 0) continue; 
        else if(nums[i] - nums[i-1] === 1) curLength++;
        else {
            if(maxLength < curLength+1)
                maxLength = curLength+1;
            curLength = 0;
        }
    }
    if(curLength !== 0 && maxLength < curLength+1)
        maxLength = curLength+1;
    return maxLength;
}

longestConsecutive([]);