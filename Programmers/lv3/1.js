const d = [1, 2];

solution(3);

function solution(n) {
  var answer = 0;

  d.length = n + 1;
  d.fill(0);

  answer = dp(n);

  console.log(answer);
  return answer;
}

function dp(x) {
  console.log(d);
  if (x === 1) return 1;
  if (x === 2) return 2;
  if (d[x] !== 0) return d[x];
  return (d[x] = (dp(x - 1) + dp(x - 2)) % 1000000007);
}
