const phone = {
    1 : [1, 1],
    2 : [2, 1],
    3 : [3, 1],
    4 : [1, 2],
    5 : [2, 2],
    6 : [3, 2],
    7 : [1, 3],
    8 : [2, 3],
    9 : [3, 3],
    "*" : [1, 4],
    0 : [2, 4],
    "#" : [3, 4],
}

const solution = (numbers, hand) => {
    let answer = "";
    let left = [1,4], right = [3,4];
    const h = hand === "right" ? "R" : "L";
    numbers.forEach(v => {
        if(v === 1 || v === 4 || v === 7) {
            answer += "L";
            left = phone[v];
        } else if(v === 3 || v === 6 || v === 9) {
            answer += "R";
            right = phone[v];
        } else {
            const distL = Math.abs(left[0] - phone[v][0]) + Math.abs(left[1] - phone[v][1]);
            const distR = Math.abs(right[0] - phone[v][0]) + Math.abs(right[1] - phone[v][1]);
            if(distL === distR) {
                if(hand === "right") {
                    answer += "R";
                    right = phone[v];
                }
                else {
                    answer += "L"
                    left = phone[v];
                }
            } else if(distL > distR) {
                answer += "R";
                right = phone[v];
            } else {
                answer += "L";
                left = phone[v];
            }
        }

    });
    return answer;
}

console.log(solution([1,3,4,5,8,2,1,4,5,9,5], "right"));