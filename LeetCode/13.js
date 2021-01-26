/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const arr = s.split('');
    let answer = 0;
    for(let i = 0; i < arr.length; ++i) {
        if(roman.indexOf(arr[i]+arr[i+1]) !== -1) {
            answer += nums[roman.indexOf(arr[i]+arr[i+1])];
            i += 1;
        } else {
            answer += nums[roman.indexOf(arr[i])];
        }
    }
    return answer;
};

romanToInt("MCMXCIV");