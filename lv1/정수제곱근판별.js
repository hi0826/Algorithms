solution(121);
function solution(n) {
  var answer = 0;

  const m = Math.sqrt(n);
  const floorM = Math.floor(Math.sqrt(n));
  console.log(`m : ${m} floorM : ${floorM}`);
  if (Math.abs(m - floorM) < Number.EPSILON) answer = Math.pow(m + 1, 2);
  else answer = -1;

  console.log(answer);
  return answer;
}
