solution("pPoooyY");

function solution(s) {
  /*
        p의 갯수와 y의 갯수
        p === y >> true
        */
  const arr = [];
  let p = 0;
  let y = 0;

  for (let i = 0; i < s.length; ++i) arr.push(s.slice(i, i + 1));

  console.log(arr);

  arr.forEach(function (i) {
    p = i === "p" || i === "P" ? p + 1 : p;
    y = i === "y" || i === "Y" ? y + 1 : y;
  });

  const answer = p === y;
  console.log(answer);
  return answer;
}
