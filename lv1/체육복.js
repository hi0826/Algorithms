solution(5, [2, 4], [1, 3, 5]);

function solution(n, lost, reserve) {
  //total student : n
  //잃어버린 수 : lost []
  //여벌 가진 학생들 : reserve []

  /*for (let l = 0; l < lost.length; ++l) {
    for (let r = 0; r < reserve.length; ++r) {
      if (lost[l] === reserve[r]) {
        reserve.splice(r, 1);
        lost.splice(l, 1);
        l = 0;
        break;
      }
    }
  }

  let answer = n - lost.length;

  for (let l of lost) {
    for (let r = 0; r < reserve.length; ++r) {
      if (Math.abs(reserve[r] - l) === 1) {
        answer++;
        reserve.splice(r, 1);
        console.log(reserve);
      }
    }
  }

  console.log(answer);
*/

  let answer = 0;
  let arr = [];
  arr[n - 1] = 1;
  arr.fill(1);
  console.log(arr);

  for (let l = 0; l < lost.length; ++l) arr[lost[l] - 1] -= 1;
  console.log(arr);

  for (let r = 0; r < reserve.length; ++r) arr[reserve[r] - 1] += 1;
  console.log(arr);

  for (let a = 0; a < arr.length; ++a) {
    if (arr[a] === 0) {
      if (arr[a - 1] > 1) {
        arr[a - 1] -= 1;
        arr[a] += 1;
        answer += 1;
        continue;
      } else if (arr[a + 1] > 1) {
        arr[a + 1] -= 1;
        arr[a] += 1;
        answer += 1;
        continue;
      }
    } else answer += 1;
  }
  console.log(arr);

  console.log(answer);

  return answer;
}
