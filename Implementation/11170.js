const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
const t = Number(input[0]);
const arr = input.slice(1).map((lst) => lst.split(' ').map((num) => Number(num)));
// 풀이
function getZeroCount(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    String(i)
      .split('')
      .forEach((c) => {
        if (c === '0') count += 1;
      });
  }
  return count;
}
function solution(t, arr) {
  const answer = [];
  arr.forEach((numbers) => {
    answer.push(getZeroCount(...numbers));
  });
  return answer.join('\n');
}
console.log(solution(t, arr));
