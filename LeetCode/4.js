/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const nums = nums1.concat(nums2);
    nums.sort((a, b) => a-b);
    console.log(nums);
    if(nums.length % 2 === 1) {
        return nums[parseInt(nums.length/2)];
    } else {
        return (nums[nums.length/2] + nums[nums.length/2-1]) / 2;
    }
};

console.log(findMedianSortedArrays([1,3], [2]));