const participant = ["a", "b", "c", "d", "e"];
const completion = ["b", "e", "a", "c"];

console.log(solution(participant, completion));

function solution(participant, completion) {
  /*
    participant : 참가자들
    completion : 완주자들
    completion.length = participant.length-1
    */
  var answer = "";

  const comObj = {};
  for (let key of completion) {
    if (comObj[key]) comObj[key]++;
    else comObj[key] = 1;
  }

  for (let key of participant) {
    if (comObj[key]) comObj[key]--;
    else return key;
  }
}
