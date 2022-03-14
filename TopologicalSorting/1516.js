const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
const n = Number(input[0]);
const arr = input.slice(1).map((lst) => lst.split(' ').map((num) => Number(num)));
// 풀이
function solution(n, arr) {
  const result = new Array(n + 1).fill(0);
  const graph = new Array(n + 1).fill().map((lst) => new Array());
  const time = new Array(n + 1).fill(0);
  const indegree = new Array(n + 1).fill(0);
  // 시간 정보와 간선정보 채우기
  for (let i = 0; i < n; i++) {
    time[i + 1] = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] === -1) break;
      indegree[i + 1] += 1;
      graph[arr[i][j]].push(i + 1); // i + 1 로 이동 가능
    }
  }
  // 위상 정렬
  const queue = [];
  for (let i = 1; i <= n; i++) {
    if (!indegree[i]) {
      queue.push(i);
    }
  }
  while (queue.length) {
    const cur = queue.shift();
    result[cur] += time[cur];
    for (const target of graph[cur]) {
      // cur이 선행되어야 하는 target들
      result[target] = Math.max(result[cur], result[target]);
      indegree[target] -= 1;
      if (!indegree[target]) {
        queue.push(target);
      }
    }
  }
  return result.slice(1).join('\n');
}

console.log(solution(n, arr));
