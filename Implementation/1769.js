const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
const str = input[0];
// 풀이
function getSumString(str) {
  let result = str.split('').reduce((acc, cur) => acc + Number(cur), 0);
  return String(result);
}
function solution(str, count) {
  const answer = [];
  if (str.length === 1) {
    answer.push(count);
    if (Number(str) % 3) answer.push('NO');
    else answer.push('YES');
    return answer.join('\n');
  }
  return solution(getSumString(str), count + 1);
}
console.log(solution(str, 0));
