console.log(solution(["Jane", "Kim"]));

function solution(seoul) {
  var answer = "";

  let ans;

  seoul.forEach(function (t, index) {
    if (t === "Kim") ans = index;
  });

  answer = "김서방은 " + ans + "에 있다";

  return answer;
}
