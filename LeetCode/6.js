/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    if(numRows === 1) return s;
    const zigzag = Array.from({length : numRows}, v => []);
    const str = s.split('');
    console.log(zigzag);
    let i = 0, down = true;
    while(str.length) {
        zigzag[i].push(str.shift());
        console.log(zigzag);
        if(i === zigzag.length-1) down = false;
        else if(i === 0) down = true;

        if(down) ++i;
        else --i;
    }
    const answer = zigzag.reduce((str, v) => str += v.join(''), '');
    console.log(answer);
};

convert('AB', 1);