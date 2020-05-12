solution([93, 30, 55], [1, 30, 5]);

function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.slice();
  while (days.length > 0) {
    for (let i = 0; i < days.length; ++i) {
      days[i] += speeds[i];
    }
    let count = 0;
    console.log(days);
    while (true) {
      if (days[0] >= 100) {
        days.shift();
        speeds.shift();
        count++;
      } else break;
    }
    if (count) answer.push(count);
  }

  console.log(answer);
  return answer;
}
