function solution(arr) {
  const sum = arr.reduce((acc, val) => acc + val);

  return sum / arr.length;
}
