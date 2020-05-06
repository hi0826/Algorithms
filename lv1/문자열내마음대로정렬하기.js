solution(["abec", "abed", "cdx"], 2);

function solution(strings, n) {
  /*
    strings 에서 n번째 문자를 기준으로 정렬
    */

  const arr = strings;

  strings.sort();
  strings.sort(function (a, b) {
    if (a[n] === b[n]) return a.localeCompare(b);
    return a[n].localeCompare(b[n]);
  });

  console.log(strings);
  const answer = strings;
  return answer;
}
