function findPaths(maze, row, col, path = [], paths = []) {
    const numRows = maze.length;
    const numCols = maze[0].length;
  
    // Base case: Reached the bottom-right corner
    if (row === numRows - 1 && col === numCols - 1) {
      paths.push([...path, [row, col]]);
      return;
    }
  
    // Check if the current cell is a valid move
    if (row >= numRows || col >= numCols || maze[row][col] === 1) {
      return;
    }
  
    // Move right
    findPaths(maze, row, col + 1, [...path, [row, col]], paths);
  
    // Move down
    findPaths(maze, row + 1, col, [...path, [row, col]], paths);
  }