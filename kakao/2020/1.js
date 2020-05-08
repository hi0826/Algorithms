solution("aabbaccc");

function solution(s) {
  /*
   */

  const str = s;
  for (let i = 1; i < s.length; ++i) {
    count(i, s);
  }
  var answer = 0;
  return answer;
}

function count(n, s) {
  let count = 1;
  let obj = [];
  let tempObj = {};
  for (let i = 0; i < s.length; i += n) {
    const arr1 = s.substr(i, n);
    const arr2 = s.substr(i + n, n);
    if (arr1 === arr2) {
      count++;
      tempObj = { word: arr1, count: count };
    } else {
      obj.push(tempObj);
      tempObj = {};
      count = 1;
    }
  }
  console.log(obj);
}
