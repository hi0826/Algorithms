console.log(solution("e F d", 4));

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; ++i) {
    let ascii = s.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      ascii += n;
      if (ascii > 90) ascii -= 26;
      answer += String.fromCharCode(ascii);
    } else if (ascii >= 97 && ascii <= 122) {
      ascii += n;
      if (ascii > 122) ascii -= 26;
      answer += String.fromCharCode(ascii);
    } else {
      answer += s[i];
    }
  }
  return answer;
}
