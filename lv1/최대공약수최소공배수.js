console.log(solution(30, 20));

function solution(n, m) {
  let arr = [];
  n < m ? (arr = [n, m]) : (arr = [m, n]);

  let max = 0;
  let min = 0;

  for (let i = 0; i <= arr[0]; ++i) {
    if (arr[0] % i === 0 && arr[1] % i === 0) max = i;
  }

  for (let i = arr[1]; ; ++i) {
    if (i % arr[0] === 0 && i % arr[1] === 0) {
      min = i;
      break;
    }
  }

  return [max, min];
}
