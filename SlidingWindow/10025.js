const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

console.log(solution(input));
// 풀이
function solution(arr) {
  const [n, k] = arr[0].split(' ').map((num) => Number(num));
  const maxLen = 2 * k + 1;

  const lst = arr.slice(1).map((elem) => elem.split(' ').map((num) => Number(num)));
  lst.sort((a, b) => a[1] - b[1]);

  let right = 1;
  let answer = lst[0][0];
  let temp = answer;

  for (const [g, x] of lst) {
    while (right < lst.length && lst[right][1] - x < maxLen) {
      temp += lst[right][0];
      right++;
    }
    answer = Math.max(answer, temp);
    temp -= g;
  }

  return answer;
}
