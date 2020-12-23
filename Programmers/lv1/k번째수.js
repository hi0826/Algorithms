solution(
  [1, 5, 2, 6, 3, 7, 4, 10, 20, 30],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
    [1, -1, 1],
  ]
);

function solution(array, commands) {
  /*
    i ~ j 만큼 자르고
    정렬 후 k 번째
    */
  var answer = [];

  for (let c = 0; c < commands.length; ++c) {
    const array_t = array.slice();
    let i = commands[c][0] - 1;
    //i < 0 ? (i = array_t.length + 1 - i * -1) : i;

    let j = commands[c][1] - 1;
    //j < 0 ? (j = array_t.length + 1 - j * -1) : j;

    let k = commands[c][2] - 1;
    //k < 0 ? (k = array_t.length + 1 - k * -1) : k;

    console.log(`i : ${i} j : ${j} k : ${k}`);
    const arr = array_t.splice(i, j - i + 1);
    console.log(arr);
    arr.sort((a, b) => a - b);
    console.log(arr);
    answer.push(arr[k]);
  }

  return answer;
}
