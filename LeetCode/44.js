/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// greedy algorithm
const isMatch = (s, p) => {
  // ? : any character
  // * : any character sequence
  const sLen = s.length;
  const pLen = p.length;
  const memo = Array.from(new Array(sLen + 1), (v) => (v = new Array(pLen + 1).fill(true)));
  console.log(memo);
  for (let i = 1; i < sLen; ++i) {
    memo[0][i] = p[i - 1] === '*' ? memo[0][i - 1] : false;
  }
  for (let i = 1; i < sLen; ++i) {
    for (let j = 1; j < pLen; ++j) {}
  }
};

isMatch('aa', '*');
