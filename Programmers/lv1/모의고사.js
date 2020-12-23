solution([1, 3, 2, 4, 2]);

function solution(answers) {
  var res = [];

  let student = [[], [], []];

  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer = [0, 0, 0];

  const max = student.length;
  const problems = answers.length;

  for (let p = 0; p < problems; ++p) {
    student1[p % 5] === answers[p] ? answer[0]++ : 0;
    student2[p % 8] === answers[p] ? answer[1]++ : 0;
    student3[p % 10] === answers[p] ? answer[2]++ : 0;
  }

  let maxAnswer = 0;

  for (let i of answer) {
    if (maxAnswer < i) maxAnswer = i;
  }

  for (let i = 0; i < 3; ++i) {
    if (maxAnswer === answer[i]) res.push(i + 1);
  }

  console.log(res);
  return res;
}
