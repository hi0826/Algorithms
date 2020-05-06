let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);

function solution(board, moves) {
  /*
  board
  index 커지면 아래쪽
  [ ]
  [ ]
  [ ]
  ...
  [ ]

  moves
  1~board 크기만큼
  */
  let answer = 0;

  let doll = board;
  let basket = [];
  let count = 0;
  let curDoll = 0;

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    //console.log(`move : ${move}`);
    for (let y = 0; y < doll.length; ++y) {
      if (doll[y][move - 1] != 0) {
        let dollNum = doll[y][move - 1];
        //console.log(`doll : ${dollNum}`);
        //console.log(`doll Pos : ${doll[y][move - 1]}`);
        doll[y][move - 1] = 0;
        basket.push(dollNum);
        //console.log(basket);
        for (let i = 0; i < basket.length - 1; ++i) {
          curDoll = basket[i];
          if (curDoll === basket[i + 1]) {
            count++;
            basket.splice(i, i + 1);
            i--;
          }
        }
        break;
      }
    }
  }

  answer = count * 2;
  //console.log(answer);
  return answer;
}
