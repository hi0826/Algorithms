solution([3, 2, 6], 10);

function solution(arr, divisor) {
  const answer = arr.filter((element) => element % divisor === 0);

  answer.sort((a, b) => a - b);
  if (answer.length < 1) answer.push(-1);

  return answer;
}
