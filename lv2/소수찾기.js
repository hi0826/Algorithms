let result = new Set();
solution("011");

function solution(numbers) {
  let arr = numbers.split("");
  arr = arr.map((value) => {
    return { value: value, check: false };
  });
  console.log(arr);
  for (let i = 0; i < arr.length; ++i) {
    permutation(arr, i + 1, [], 0);
  }
  //console.dir(result);
  const answer = checkPrime();
  //console.log(answer);
  return answer;
}

function permutation(arr, cnt, curArr) {
  // 만들려는 배열 길이와 같은지 검사
  let choice = curArr.slice();
  if (choice.length >= cnt) return parseInt(curArr.join(""));
  for (let i = 0; i < arr.length; ++i) {
    // 현재 배열에 있는지 확인하고 넣어야함
    if (!arr[i].check) {
      choice.push(arr[i].value);
      arr[i].check = true;
      result.add(permutation(arr, cnt, choice));
      choice.pop();
      arr[i].check = false;
    }
  }
  return 1;
}

function checkPrime() {
  let answer = 0;
  for (let i of result) {
    let isPrime = true;
    if (i === 0 || i === 1) continue;
    for (let l = 2; l < Math.sqrt(i); ++l) {
      if (i % l === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) answer++;
  }
  return answer;
}
