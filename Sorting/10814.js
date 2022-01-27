const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
const x = Number(input[0]);
const arr = input.slice(1).map((txt) => txt.split(' '));
// 풀이
function solution(x, arr) {
  const answer = [];
  arr.sort((a, b) => Number(a[0]) - Number(b[0]));
  return arr.map((txt) => txt.join(' ')).join('\n');
}
console.log(solution(x, arr));
