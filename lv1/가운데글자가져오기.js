solution("qwerd");

function solution(s) {
  const half = s.length % 2 === 0 ? s.length / 2 - 1 : s.length / 2;
  const add = s.length % 2 === 0 ? 2 : 1;
  const answer = s.slice(half, half + add);

  console.log(answer);

  return answer;
}
