solution([6, 9, 5, 7, 4]);

function solution(heights) {
  /*
    왼쪽으로만 신호를 쏨
    자기보다 높은 탑이 수신
    인덱스는 1 ~ 5
  */

  const answer = [];
  let laser = 0;

  for (let i = heights.length - 1; i >= 0; --i) {
    laser = heights[i];
    for (let j = i; j >= 0; --j) {
      if (laser < heights[j]) {
        answer[i] = j + 1;
        break;
      } else if (j === 0) answer[i] = 0;
    }
  }

  console.log(answer);
  return answer;
}
