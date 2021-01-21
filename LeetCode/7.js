const reverse = (x) => {
    let num = x;
    let answer = 0;
    while(num) {
        answer = answer * 10 + num % 10;
        answer = parseInt(answer);
        num /= 10;
        num = parseInt(num);
        console.log(answer);
    }
    
    if(answer < Math.pow(-2, 31)) return 0;
    else if(answer > Math.pow(2, 31)) return 0;
    return answer;
}

reverse(1534236469);