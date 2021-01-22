/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let max = 0;
    let end = height.length-1;
    let start = 0;
    while(end !== start) {
        const h = Math.min(height[start], height[end]);
        const w = end-start;
        max = Math.max(max, w*h);
        if(height[start] < height[end])     start += 1;
        else    end -= 1;
    }
    console.log(max);
    return max;
}

maxArea([1,2,1]);