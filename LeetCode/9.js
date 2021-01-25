/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if(x < 0) return false;
    const arr = x.toString().split('');
    const reverseX = parseInt(arr.reverse().join(''));
    if(x === reverseX) return true;
    return false;
}

isPalindrome(121);