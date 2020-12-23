solution(5, 3);

function solution(a, b) {
  /*
    a ~ b 사이 속한 모든 정수의 합
    */
  let answer = 0;
  const min = a < b ? a : b;
  const max = a > b ? a : b;

  for (let i = min; i < max + 1; ++i) {
    answer += i;
  }

  console.log(answer);
  return answer;
}
