/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
    let answer = "";
    const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let input = num;

    for(let i = nums.length-1; i >=0; --i) {
        while(nums[i] <= input) {
            input -= nums[i];
            answer += roman[i];
        }
    }
    return answer;
};

console.log(intToRoman(1994));