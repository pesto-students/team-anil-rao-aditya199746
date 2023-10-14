function isSafe(board, row, col, N) {
    // Check for queens in the same column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 1) {
        return false;
      }
    }
  
    // Check for queens in the upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) {
        return false;
      }
    }
  
    // Check for queens in the upper right diagonal
    for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
      if (board[i][j] === 1) {
        return false;
      }
    }
  
    return true;
  }
  
  function solveNQueens(N) {
    const board = new Array(N).fill(0).map(() => new Array(N).fill(0));
    const solutions = [];
  
    function placeQueens(row) {
      if (row === N) {
        solutions.push(board.map(row => row.slice()));
        return;
      }
  
      for (let col = 0; col < N; col++) {
        if (isSafe(board, row, col, N)) {
          board[row][col] = 1;
          placeQueens(row + 1);
          board[row][col] = 0;
        }
      }
    }
  
    placeQueens(0);
    return solutions;
  }