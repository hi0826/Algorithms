solution(10);

function solution(n) {
  const arr = [];

  for (let i = 0; i < n + 1; ++i) arr.push(true);

  for (let i = 2; i < arr.length; ++i) {
    if (arr[i]) {
      for (let j = 2; j * i < arr.length; ++j) {
        arr[i * j] = false;
      }
    }
  }
  let answer = 0;
  for (let i = 2; i < arr.length; ++i) {
    if (arr[i]) answer++;
  }

  return answer;
}
