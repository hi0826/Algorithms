/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a-b);
    let closest = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < nums.length; ++i) {
        const val = nums[i];
        let front = i+1;
        let back = nums.length-1;
        while(front < back) {
            const sum = val + nums[front] + nums[back];
            console.log(val, nums[front], nums[back]);
            console.log(sum);
            if(sum === target) return target;
            else {
                const cal = Math.abs(target - sum);
                if(Math.abs(target - closest) > cal) closest = sum;
                console.log(cal);
                console.log(closest);
                if(target < sum) back -= 1;
                else if(target >= sum) front += 1;
            }
        }
    }
    console.log(closest);
    return closest;
};

threeSumClosest([0,2,1, -3], 1);