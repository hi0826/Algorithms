solution(3);

function solution(n) {
  let answer = "";
  const water = "수";
  const melon = "박";
  for (let i = 0; i < n; ++i) {
    i % 2 === 0 ? (answer += water) : (answer += melon);
  }

  return answer;
}
