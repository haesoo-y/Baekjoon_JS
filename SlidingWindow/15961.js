const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
const [n, d, k, c] = input[0].split(' ').map((num) => Number(num));
const arr = input.slice(1).map((num) => Number(num));

// 풀이
function solution(arr, n, d, k, c) {
  let answer = 0;
  const lst = [...arr, ...arr];
  const map = {};
  arr.forEach((num) => (map[num] = 0)); // 객체 초기화
  map[c] += 1;
  let cnt = 1;
  for (let i = 0; i < k; i++) {
    if (!map[lst[i]]) cnt += 1;
    map[lst[i]] += 1;
  }
  // 슬라이딩 윈도우
  let start = 0;
  for (let end = k; end < n + k; end++) {
    // 왼쪽 제거
    map[lst[start]] -= 1;
    if (!map[lst[start]]) cnt -= 1;
    // 오른쪽 추가
    if (!map[lst[end]]) cnt += 1;
    map[lst[end]] += 1;
    answer = Math.max(answer, cnt);
    start++;
  }

  return answer;
}
console.log(solution(arr, n, d, k, c));
