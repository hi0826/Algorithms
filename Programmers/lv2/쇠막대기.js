solution("()(((()())(())()))(())");

function solution(arrangement) {
  /*
    쇠막대기는 자신보다 긴 쇠막대기 위에만
    끝점은 겹칠 수 없음
    레이저는 적어도 1
    어떤 쇠막대기의 양 끝점과도 겹치지 않음

    arrangement : () 형태의 레이저
    쇠막대기와 레이저의 배치 표현
    쇠막대기 수
    */

  const arr = arrangement.split("");
  let sticks = [];
  let answer = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] + arr[i + 1] === "()") {
      sticks = sticks.map((e) => e + 1);
      ++i;
    } else if (arr[i] === "(") {
      sticks.push(1);
    } else {
      answer += sticks.pop();
    }
    console.log(`arr : ${arr.reduce((a, b) => a + b)}\nsticks:${sticks}`);
  }

  console.log(answer);
}
