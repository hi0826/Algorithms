/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    for(let i = 1 ; i < nums.length; ++i) {
        if(nums[i] === nums[i-1])  {
            nums.splice(i, 1);
            i -= 1;
        }
    }
    return nums.length;
};