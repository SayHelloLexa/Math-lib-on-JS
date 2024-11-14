'use strict';

class Matrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    getMatrix() {
        return this.matrix;
    }

    setMatrix(matrix) {
        if (this.matrix.length !== matrix.length || this.matrix[0].length !== matrix[0].length) {
            throw new Error("the matrix differs in size from the original one");
        }
        this.matrix = matrix;
    }

    equals(matrix) {
        if (this.matrix.length !== matrix.getMatrix().length || this.matrix[0].length !== matrix.getMatrix()[0].length) {
            return false;
        }
        const eps = 1e-7;
        for (let x = 0; x < this.matrix.length; x++) {
            for (let y = 0; y < this.matrix[0].length; y++) {
                if (Math.abs(this.matrix[x][y] - matrix.getMatrix()[x][y]) >= eps) {
                    return false;
                }
            }
        }
        return true;
    }
}

module.exports = Matrix;