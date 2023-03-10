const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// the graph
const adjacencyList = new Map();

// add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// create the graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// console.log(adjacencyList);

// bfs breadth first search
function bfs(start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift(); // mutates the queue

    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log(destination + " found");
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

bfs("PHX");
