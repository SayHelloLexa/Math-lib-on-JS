'use strict';

const Matrix = require('./matrix.js');

class Matrix4d extends Matrix {
  constructor(matrix) {
      if (matrix.length !== 4 || matrix[0].length !== 4) {
          throw new Error("the transmitted array differs from the dimension of the matrix4d");
      }
      super(matrix);
  }
}

module.exports = Matrix4d;