const transpose=(matrix)=>{
    const rows = matrix.length;
    const cols = matrix[0].length;

    const transposedMatrix = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          transposedMatrix[j][i] = matrix[i][j];
        }
      }
      return transposedMatrix
}