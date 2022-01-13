const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
const [n, x] = input[0].split(' ').map((num) => Number(num));
const arr = input[1].split(' ').map((num) => Number(num));

// 풀이
function sumArr(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function solution(n, x, arr) {
  if (sumArr(arr) === 0) return 'SAD';
  const answer = [sumArr(arr.slice(0, x)), 1]; // 방문자 수, 기간 수
  let window = answer[0];
  for (let i = x; i < n; i++) {
    window = window - arr[i - x] + arr[i];
    if (window > answer[0]) {
      answer[0] = window;
      answer[1] = 1;
    } else if (window === answer[0]) {
      answer[1] += 1;
    }
  }
  return answer.join('\n');
}
console.log(solution(n, x, arr));
