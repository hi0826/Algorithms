/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    const answer = [];
    if(nums.length <= 1) return answer;

    nums.sort((a, b) => a-b);
    for(let i = 0 ; i < nums.length; ++i) {
        const val = -1 * nums[i];
        let front = 0;
        let back = nums.length-1;
        while(front < back) {
            if(front === i) {
                front += 1;
                continue;
            } else if(back === i) {
                back -= 1;
                continue;
            } if(val === nums[front] + nums[back]) {
                const arr = [nums[i], nums[front], nums[back]].sort((a, b) => a-b);
                if(hasArray(answer, arr) === false) answer.push(arr);
                front += 1;
                continue;
            }
            else if(val < nums[front] + nums[back]) back -=1;
            else if(val > nums[front] + nums[back]) front += 1;
        }
    }
    console.log(answer);
};

const hasArray = (arr1, arr2) => {
    const strArr2 = JSON.stringify(arr2);
    for(let arr of arr1) {
        if(JSON.stringify(arr) === strArr2) return true;
    }
    return false;
}
threeSum([-1,0,1,2,-1,-4]);