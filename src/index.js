
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let a = [];
  if (Array.isArray(matrix)) {
    for (let index = 0; index < matrix.length; index++) {
      if (index % 2) {
        a = a.concat(matrix[index].sort((a, b) => b - a));
      } else {
        a = a.concat(matrix[index].sort((a, b) => a - b));
      }
    }
    return a;
  } else { return [] }
}

