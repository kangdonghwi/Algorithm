const graph = {
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"]
};

//깊이우선탐색

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length != 0) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter(x => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }
  return visited;
}

//넓이우선탐색

function bfs(graph, start) {
  let visited = [];
  let queue = [start];

  while (stack.length != 0) {
    let n = queue.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter(x => !visited.includes(x));
      for (let i of sub) {
        queue.push(i);
      }
    }
  }
  return visited;
}
