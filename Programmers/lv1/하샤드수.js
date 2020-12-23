console.log(solution(11));

function solution(x) {
  const str = x + "";
  const arr = [];

  for (let i = 0; i < str.length; ++i) {
    arr.push(parseInt(str[i]));
  }
  console.log(arr);

  const reducer = arr.reduce((a, b) => a + b);
  console.log(reducer);

  if (x % reducer) return false;
  return true;
}
