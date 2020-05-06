solution(12);

function solution(n) {
  /*
        1 = 1
        2 = 2
        3 = 4
        
        4 = 11
        ...
        1 2 4 순 다음 자리도 1 2 4
        3마다 1씩
    */
  let answer = "";
  do {
    const num = n % 3;
    n = parseInt(n / 3);

    if (num === 0) {
      answer = "4" + answer;
      n--;
    } else if (num === 1) {
      answer = "1" + answer;
    } else if (num === 2) {
      answer = "2" + answer;
    }
    console.log(answer);
  } while (n !== 0);

  return answer;
}
