solution([4, 4, 4, 3, 3]);

function solution(arr) {
  const answer = [];
  let curX = -1;
  arr.forEach(function (x) {
    if (curX !== x) {
      answer.push(x);
      curX = x;
    }
  });

  return answer;
}
