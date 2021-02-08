/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
    const answer = [];
    const answerSet = new Set();
    
    nums.sort((a, b) => a - b);

    for(let i = 0 ; i < nums.length; ++i) {
        for(let j = i + 1 ; j < nums.length; ++j) {
            let f = j+1;
            let b = nums.length-1;
            while(f < b) {
                const sum = nums[i] + nums[j] + nums[f] + nums[b];
                const sumArr = [nums[i], nums[j], nums[f], nums[b]];
                if(sum === target) {
                    if(!answerSet.has(JSON.stringify(sumArr))) {
                        answerSet.add(JSON.stringify(sumArr));
                        answer.push(sumArr);
                        f += 1;
                    } else {
                        f += 1;
                    }
                } 
                else if(sum < target) f += 1;
                else if(sum > target) b -= 1;
            }
        }
    }
    console.log(answer);
    return answer;
}


foursum([], 0);