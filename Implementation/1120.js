const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
const [a, b] = input[0].split(' ');

// 풀이
function solution(a, b) {
  const tmp = [];
  const lenDiff = b.length - a.length;
  for (let i = 0; i <= lenDiff; i++) {
    let diff = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[j] !== b[j + i]) {
        diff += 1;
      }
    }
    tmp.push(diff);
  }
  return Math.min(...tmp);
}
console.log(solution(a, b));
