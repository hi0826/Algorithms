const d = solution([1, 3, 2, 5, 4], 9);
console.log(d);

function solution(d, budget) {
  const reducer = d.reduce((a, b) => a + b);
  if (budget === reducer) return d.length;

  d.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < d.length; ++i) {
    budget = budget - d[i];
    count++;
    if (budget < 0) {
      count--;
      break;
    }
  }

  return count;
}
