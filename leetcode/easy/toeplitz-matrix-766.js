/*
 * @param {number[][]} matrix
 * @return {boolean}
 */

 // STRATEGY USED: nested row and column for loops and then just check upper left neighbor
var isToeplitzMatrix = function(matrix) {
  for(let i = 1; i < matrix.length; i++) {
      for(let j = 1; j < matrix[0].length; j++) {
        if (matrix[i][j] !== matrix[i - 1][j - 1]) {
          return false;
        }
      }
  }
  return true;
};

matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
];

console.log(isToeplitzMatrix(matrix));