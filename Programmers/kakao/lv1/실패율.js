solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

function solution(N, stages) {
  /*
    실패율을 구하라
    실패율 = 클리어 못한 수 / 도달한 수

    All stage = N
    clients = [stages]
    answer 내림차순 정렬
    */

  const answer = [];

  for (let s = 1; s <= N; ++s) {
    let clients = stages.reduce((a, e) => a + (e >= s ? 1 : 0), 0);
    let count = stages.reduce((a, e) => a + (e === s ? 1 : 0), 0);
    console.log(`stage : ${s}, clients : ${clients}, count : ${count}`);
    const failure = count === 0 ? 0 : count / clients;
    answer.push({ stage: s, rate: failure });
  }

  answer.sort(function (prevObj, nextObj) {
    if (prevObj.rate < nextObj.rate) return 1;
    else if (prevObj.rate > nextObj.rate) return -1;
    else return prevObj.stage - nextObj.stage;
  });

  console.log(answer);

  return answer.map((e) => e.stage);
}
