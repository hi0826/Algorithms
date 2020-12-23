solution("try hello world");

function solution(s) {
  const arr = s.split(" ");
  //console.log(arr);
  const answer = [];

  for (let i = 0; i < arr.length; ++i) {
    const str = arr[i];
    let tempStr = "";
    for (let j = 0; j < str.length; ++j) {
      if (j % 2 === 0) tempStr += str[j].toUpperCase();
      else tempStr += str[j].toLowerCase();
    }
    answer.push(tempStr);
  }

  const result = answer.reduce((acc, val) => acc + " " + val);

  return result;
}
