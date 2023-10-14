function fillConnectedRegion(grid, row, col, newColor) {
    const oldColor = grid[row][col];
    if (oldColor === newColor) {
      return; // Avoid infinite loop and unnecessary work
    }
  
    const rows = grid.length;
    const cols = grid[0].length;
  
    function dfs(r, c) {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== oldColor) {
        return; // Stop recursion if out of bounds or different color
      }
  
      grid[r][c] = newColor; // Change color of current cell
  
      // Recurse in all four directions
      dfs(r - 1, c);
      dfs(r + 1, c);
      dfs(r, c - 1);
      dfs(r, c + 1);
    }
  
    dfs(row, col); // Start the recursive flood-fill
  
    return grid;
  }