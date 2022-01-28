const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
const firstArr = input[1].split(' ').map((num) => Number(num));
const secondArr = input[3].split(' ').map((num) => Number(num));
// 풀이
function solution(firstArr, secondArr) {
  const answer = [];
  const map = {};
  firstArr.forEach((num) => {
    map[num] = true;
  });
  secondArr.forEach((num) => {
    answer.push(Number(Boolean(map[num])));
  });

  return answer.join('\n');
}
console.log(solution(firstArr, secondArr));
