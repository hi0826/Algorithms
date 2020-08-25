solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);

function solution(skill, skill_trees) {
  let answer = [];
  let result = 0;
  skill_trees.forEach(function (t) {
    let arr = [];
    for (let i = 0; i < skill.length; ++i) {
      let idx = 27;
      for (let j = 0; j < t.length; ++j) {
        if (skill[i] === t[j]) {
          idx = j;
        }
      }
      arr[i] = idx;
    }
    answer.push(arr);
  });

  answer.forEach(function (v) {
    const temp = v.slice();
    console.log(temp);
    v.sort((a, b) => a - b);
    if (isequal(temp, v)) result++;
  });

  console.log(result);
  console.log(answer);
}

function isequal(arr1, arr2) {
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
