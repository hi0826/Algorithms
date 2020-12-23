solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

// 무게를 확인한다.
// 하나를 올린다.
// 무게를 확인한다.
// 하나를 더올린다 or 끝까지 기다린다.
function solution(bridge_length, weight, truck_weights) {
  let curweight = 0;
  let curtruck = [];
  let curtruckPos = [];
  let answer = 0;

  for (let i = 0; ; ++i) {
    if (truck_weights.length === 0 && curtruck.length === 0) break;

    if (curtruckPos[0] === bridge_length) {
      curtruckPos.shift();
      curweight -= curtruck.shift();
    }

    if (curweight + truck_weights[0] <= weight) {
      curweight += truck_weights[0];
      curtruck.push(truck_weights[0]);
      curtruckPos.push(0);
      truck_weights.shift();
      console.log(truck_weights);
    }

    curtruckPos = curtruckPos.map((x) => x + 1);
    answer++;
    console.log(`bridge : ${curtruck}`);
    console.log(`truckpos : ${curtruckPos}`);
  }

  console.log(answer);
}
