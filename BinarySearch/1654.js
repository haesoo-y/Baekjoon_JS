const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
const [k, n] = input[0].split(' ').map((num) => Number(num));
const arr = input
  .slice(1)
  .map((num) => Number(num))
  .sort((a, b) => b - a);

// 풀이
function solution(k, n, arr) {
  let answer = 0;
  let [left, right] = [0, arr[0]];
  let mid = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n);
  while (left <= right) {
    let count = 0;
    for (let num of arr) {
      count += Math.floor(num / mid);
      if (count >= n) break;
    }
    // 재배열
    if (count >= n) {
      answer = Math.max(answer, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return answer;
}

console.log(solution(k, n, arr));
