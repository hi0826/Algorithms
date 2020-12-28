solution("1S2D*3T");

function solution(dartResult) {
  /*
    점수 계산 로직
    1.  기회 3번
    2.  0~10점
    3.  S = ^1 
        D = ^2
        T = ^3
    4.  스타상 *2, prev *2
        아차상 *-1
    5.  스타상 중첩 *4
    6.  스타상 아차상 *-2
    
    dartResult =    점수(1~10)|보너스(SDT)|옵션(#*)
                    1 S 2 D * 3 T
    */

  const arr = dartResult.split("");
  console.log(arr);

  let num;
  let scores = [];
  let indexScores = 0;
  for (let i = 0; i < arr.length; ++i) {
    num = parseInt(arr[i]);
    if (!isNaN(num)) {
      if (!isNaN(parseInt(arr[i + 1]))) {
        let score = "" + num + arr[i + 1];
        num = parseInt(score);
        ++i;
      }
      scores[indexScores++] = num;
    } else {
      const currentIndex = indexScores - 1;
      if (arr[i] === "S") {
      } else if (arr[i] === "D") {
        scores[currentIndex] = Math.pow(scores[currentIndex], 2);
      } else if (arr[i] === "T") {
        scores[currentIndex] = Math.pow(scores[currentIndex], 3);
      } else if (arr[i] === "*") {
        scores[currentIndex] *= 2;
        if (currentIndex !== 0) scores[currentIndex - 1] *= 2;
      } else if (arr[i] === "#") {
        scores[currentIndex] *= -1;
      }
    }
  }
  //console.log(scores);

  const answer = scores.reduce((a, b) => a + b, 0);
  //console.log(answer);
  return answer;
}
