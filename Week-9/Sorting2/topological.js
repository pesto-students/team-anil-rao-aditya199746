function topologicalSort(graph) {
    const vertices = graph.length;
    const inDegree = new Array(vertices).fill(0);
    const result = [];
    
    // Calculate in-degrees for each vertex
    for (let i = 0; i < vertices; i++) {
      for (let j = 0; j < vertices; j++) {
        if (graph[j][i] === 1) {
          inDegree[i]++;
        }
      }
    }
    
    const queue = [];
    
    // Enqueue vertices with in-degree 0
    for (let i = 0; i < vertices; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }
    
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      
      for (let i = 0; i < vertices; i++) {
        if (graph[vertex][i] === 1) {
          inDegree[i]--;
          
          if (inDegree[i] === 0) {
            queue.push(i);
          }
        }
      }
    }
    
    if (result.length !== vertices) {
      console.log("Graph has a cycle!");
      return [];
    }
    
    return result;
  }
  
  const adjacencyMatrix = [
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0]
  ];
  
  const sortedVertices = topologicalSort(adjacencyMatrix);
  console.log(sortedVertices);