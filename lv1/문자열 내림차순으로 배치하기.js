solution("Zbcdefg");

function solution(s) {
  let arr = [];

  for (let i = 0; i < s.length; ++i) {
    arr.push(s.charAt(i));
  }

  arr.sort(function (a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
  });

  const answer = arr.reduce((a, v) => a + v);
  return answer;
}
