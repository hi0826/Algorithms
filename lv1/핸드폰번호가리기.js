const a = solution("027778888");

console.log(a);
function solution(phone_number) {
  let answer = "";

  for (let i = 0; i < phone_number.length - 4; ++i) {
    answer += "*";
  }
  answer += phone_number.slice(-4);
  return answer;
}
