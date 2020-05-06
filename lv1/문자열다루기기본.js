console.log(solution("123456"));

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; ++i) {
      const ans = parseInt(s[i], 10);
      if (isNaN(ans)) return false;
    }
    return true;
  }
  return false;
}
