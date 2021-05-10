/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  //sliding window
  const answer = [];

  const wordLen = words[0].length;
  const wordNum = words.length;
  const wideLen = wordLen * wordNum;

  const map = {};

  for (let word of words) {
    map[word] = map[word] + 1 || 1;
  }

  const isValid = (str) => {
    const strs = {};
    for (let i = 0; i < str.length; i += wordLen) {
      strs[str.substr(i, wordLen)] = strs[str.substr(i, wordLen)] + 1 || 1;
    }

    for (key in map) {
      if (map[key] !== strs[key]) return false;
    }

    return true;
  };

  for (let i = 0; i < s.length; ++i) {
    const substr = s.substr(i, wideLen);
    if (isValid(substr)) answer.push(i);
  }

  return answer;
};