solution(8, 12);

function solution(w, h) {
  /*
    대각선으로 이음
    만들 수 있는 정사각형 갯수
  */

  const max = w * h;
  let g;

  for (let i = 0; i <= Math.max(w, h); ++i) {
    if (w % i === 0 && h % i === 0) g = i;
  }

  const rect = h / g + w / g - 1;
  const answer = max - rect * g;

  console.log(answer);

  return answer;
}
