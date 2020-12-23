solution([1, 1, 9, 1, 1, 1], 0);

function solution(priorities, location) {
  /*
    priorities : 중요도
    location : 내 프린트 [0, priorities.length-1]
    return : 몇 번째로?
*/

  const answer = priorities.slice().map((e) => e);
  const index = priorities.slice().map((t, i) => i);
  let count = 0;

  do {
    const maxVal = Math.max(...answer);
    console.log(`answer : ${answer} \nindex : ${index}`);
    if (answer[0] < maxVal) {
      answer.push(answer.shift());
      index.push(index.shift());
    } else {
      const i = answer.shift();
      count++;
      console.log(`count : ${count}`);
      if (index.shift() === location) return count;
    }
  } while (answer.length > 0);
}
