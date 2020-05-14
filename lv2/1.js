solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);

function solution(skill, skill_trees) {
  let _skill = skill.split("");
  let _skill_trees = skill_trees.slice();
  let answer = 0;

  console.log(_skill);
  console.log(_skill_trees);

  for (let i = 0; i < _skill_trees.length; ++i) {
    let idxSkill = -1;
    let rightSkill = [];
    for (let j = 0; j < _skill.length; ++j) {
      let curSkill = _skill_trees[i].indexOf(_skill[j]);
      console.log(`idxSkill : ${idxSkill}, curSkill : ${curSkill}`);
      if (idxSkill < curSkill) {
        rightSkill.push(_skill[j]);
        console.log(rightSkill);
        idxSkill = curSkill;
      } else if (idxSkill === -1 && curSkill === -1) {
        break;
      } else break;
    }
    if (rightSkill === _skill) answer++;
  }

  console.log(answer);
  return answer;
}
