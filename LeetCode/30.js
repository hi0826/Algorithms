/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  const answer = new Set()
  const length = words[0].length
  const strArr = []
  const makeStr = (s, words) => {
    if (words.length === 0) {
      strArr.push(s)
      return
    }
    for (let i = 0; i < words.length; ++i) {
      makeStr(
        s + words[i],
        words.filter((v, idx) => idx !== i)
      )
    }
  }
  makeStr('', words)
  console.log(strArr)
  for (let str of strArr) {
    for (let i = 0; i < s.length; i += length) {
      const n = s.indexOf(str)
      if (n !== -1) answer.add(n)
    }
  }
  return new Array()
}

findSubstring('', [])
