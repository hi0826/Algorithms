const solution = n => {
    return parseInt(n.toString(3).split('').reverse().reduce((cal, t) => cal += t), 3);
}

solution(45);