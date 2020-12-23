solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
function solution(n, arr1, arr2) {
  /*
    암호화 되어서 암호를 해독해야함
    
    1.  n : 정사각형 배열 길이 
        각 칸은 " " / "#"

    2.  전체지도는 두 지도를 겹쳐서 얻을 수 있음
        arr1, arr2 : 지도
    
    3.  암호화된 배열은 각 가로줄에서
        벽 1, 공백 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열
    */

  let map1, map2;

  map1 = arr1.map((E) => E.toString(2));
  map2 = arr2.map((E) => E.toString(2));

  for (let i = 0; i < n; ++i) {
    if (map1[i].length < n) {
      for (let j = 0; map1[i].length < n; ++j) map1[i] = "0" + map1[i];
    }
    if (map2[i].length < n) {
      for (let j = 0; map2[i].length < n; ++j) map2[i] = "0" + map2[i];
    }
  }

  const totalMap = [];

  for (let i = 0; i < n; ++i) {
    let str1 = (parseInt(map1[i], 2) | parseInt(map2[i], 2)).toString(2);
    if (str1.length < n) {
      for (let j = 0; str1.length < n; ++j) str1 = "0" + str1;
    }
    totalMap.push(str1);
  }

  const answer = totalMap.map(function (str) {
    const arr = str.split("");
    return arr.map((s) => (s === "0" ? " " : "#")).reduce((a, b) => a + b);
  });

  console.log(answer);

  return answer;
}
