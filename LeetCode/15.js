/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    const answer = [];
    const answerSet = new Set();
    if(nums.length <= 1) return answer;

    nums.sort((a, b) => a-b);
    for(let i = 0 ; i < nums.length; ++i) {
        const val = -1 * nums[i];
        let front = i + 1;
        let back = nums.length-1;
        while(front < back) {
            if(val === nums[front] + nums[back]) {
                const arr = [nums[i], nums[front], nums[back]].sort((a, b) => a-b);
                if(answerSet.has(JSON.stringify(arr)) === false) {
                    answerSet.add(JSON.stringify(arr));
                    answer.push(arr);
                }
                front += 1;
                continue;
            }
            else if(val < nums[front] + nums[back]) back -=1;
            else if(val > nums[front] + nums[back]) front += 1;
        }
    }
    console.log(answer);
    return answer;
};

threeSum([-1,0,1,2,-1,-4]);