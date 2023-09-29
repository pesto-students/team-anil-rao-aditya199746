function maxCoinsInMaze(maze) {
    const rows = maze.length;
    const cols = maze[0].length;
  
    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  
    dp[0][0] = maze[0][0];
  
    // Initialize the first row
    for (let j = 1; j < cols; j++) {
      dp[0][j] = dp[0][j - 1] + maze[0][j];
    }
  
    // Initialize the first column
    for (let i = 1; i < rows; i++) {
      dp[i][0] = dp[i - 1][0] + maze[i][0];
    }
  
    // Fill in the DP table
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        dp[i][j] = maze[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  
    return dp[rows - 1][cols - 1];
  }
  
  const maze = [
    [1, 3, 1],
    [2, 2, 4],
    [5, 0, 1]
  ];
  
  const maxCoins = maxCoinsInMaze(maze);
  console.log(`The maximum number of coins: ${maxCoins}`);