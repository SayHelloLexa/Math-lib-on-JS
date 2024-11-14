'use strict';

const Matrix = require('./matrix.js');

class Matrix3d extends Matrix {
  constructor(matrix) {
      if (matrix.length !== 3 || matrix[0].length !== 3) {
          throw new Error("the transmitted array differs from the dimension of the matrix3d");
      }
      super(matrix);
  }
}

module.exports = Matrix3d;