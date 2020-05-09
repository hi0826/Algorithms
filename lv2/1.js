solution([93, 30, 55], [1, 30, 5]);

function solution(progresses, speeds) {
  let answer = [];
  let days = [];
  for (let i = 0; i < progresses.length; ++i) {
    let res = parseInt((100 - progresses[i]) / speeds[i]);
    if ((100 - progresses[i]) % speeds[i] !== 0) res += 1;
    days.push(res);
  }

  console.log(answer);
  return answer;
}
