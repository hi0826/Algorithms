const a = solution(626331);

console.log(a);

function solution(num) {
  let answer = 0;

  let n = num;

  while (answer !== 500 && n != 1) {
    n % 2 ? (n = n * 3 + 1) : (n = n / 2);
    answer++;
  }

  answer === 500 ? (answer = -1) : answer;

  return answer;
}
