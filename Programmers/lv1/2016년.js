solution(5, 24);

function solution(a, b) {
  /* 
    2016. 1. 1 금요일
    윤년, 2.29
    a month
    b day
    answer 요일
    */
  var answer = "";

  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const year = [
    { month: 1, day: 31 },
    { month: 2, day: 29 },
    { month: 3, day: 31 },
    { month: 4, day: 30 },
    { month: 5, day: 31 },
    { month: 6, day: 30 },
    { month: 7, day: 31 },
    { month: 8, day: 31 },
    { month: 9, day: 30 },
    { month: 10, day: 31 },
    { month: 11, day: 30 },
    { month: 12, day: 31 },
  ];

  let sum = -1;
  year.forEach((element) => {
    if (element.month < a) sum += element.day;
    else if (element.month === a) sum += b;
  });
  console.log(sum);
  sum = (sum + 5) % 7;
  console.log(sum);
  console.log(day[sum]);
  return answer;
}
