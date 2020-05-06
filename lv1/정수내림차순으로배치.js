solution(118372);

function solution(n) {
  const arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  arr.sort();
  arr.reverse();

  const answer = arr.reduce((a, b) => a * 10 + b);
  console.log(answer);
  return answer;
}
