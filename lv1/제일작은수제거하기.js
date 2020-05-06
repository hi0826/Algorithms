solution([10]);

function solution(arr) {
  const t_arr = arr.slice();

  console.log(t_arr);
  t_arr.sort((a, b) => a - b);

  const answer = arr.filter((element) => element > t_arr[0]);

  if (answer.length === 0) return [-1];
  return answer;
}
