'use strict'; 

const Matrix3d = require('../math/matrix3d.js');
const Matrix4d = require('../math/matrix4d.js');
const Vector2f = require('../math/vector2f.js');
const Vector3f = require('../math/vector3f.js');
const Vector4f = require('../math/vector4f.js');

class LinearMathException extends Error {
    constructor(message) {
        super(message);
        this.name = "LinearMathException";
    }
}

class LinearMath {
    static createNewVector(vector, mas) {
        if (vector.getVector().length !== mas.length) {
            throw new LinearMathException("the length of the array differs from the space of the vector");
        }
        switch (vector.getVector().length) {
            case 2:
                return new Vector2f(mas[0], mas[1]);
            case 3:
                return new Vector3f(mas[0], mas[1], mas[2]);
            case 4:
                return new Vector4f(mas[0], mas[1], mas[2], mas[3]);
        }
        return null;
    }

    static vectorPlus(vector1, vector2) {
        if (vector1.getVector().length !== vector2.getVector().length) {
            throw new LinearMathException("Vectors of different spaces");
        }
        let mas = vector1.getVector().slice();
        for (let i = 0; i < mas.length; i++) {
            mas[i] += vector2.getVector()[i];
        }
        return this.createNewVector(vector1, mas);
    }

    static vectorMinus(vector1, vector2) {
        if (vector1.getVector().length !== vector2.getVector().length) {
            throw new LinearMathException("Vectors of different spaces");
        }
        let mas = vector1.getVector().slice();
        for (let i = 0; i < mas.length; i++) {
            mas[i] -= vector2.getVector()[i];
        }
        return this.createNewVector(vector1, mas);
    }

    static vectorMultiplication(vector1, val) {
        let mas = vector1.getVector().slice();
        for (let i = 0; i < mas.length; i++) {
            mas[i] *= val;
        }
        return this.createNewVector(vector1, mas);
    }

    static vectorDivision(vector1, val) {
        if (val === 0) {
            throw new LinearMathException("division by zero");
        }
        let mas = vector1.getVector().slice();
        for (let i = 0; i < mas.length; i++) {
            mas[i] /= val;
        }
        return this.createNewVector(vector1, mas);
    }

    static getLength(vector) {
        let mas = vector.getVector();
        let sum = 0;
        for (let i = 0; i < mas.length; i++) {
            sum += Math.pow(mas[i], 2);
        }
        return Math.sqrt(sum);
    }

    static vectorNormalization(vector) {
        let length = this.getLength(vector);
        return this.vectorDivision(vector, length);
    }

    static vectorScalarProduct(vector1, vector2) {
        if (vector1.getVector().length !== vector2.getVector().length) {
            throw new LinearMathException("Vectors of different spaces");
        }
        let sum = 0;
        let mas = vector1.getVector();
        for (let i = 0; i < mas.length; i++) {
            sum += vector1.getVector()[i] * vector2.getVector()[i];
        }
        return sum;
    }

    static vectorProduct(vector1, vector2) {
        let v1 = vector1.getVector();
        let v2 = vector2.getVector();
        return new Vector3f(
            v1[1] * v2[2] - v1[2] * v2[1],
            - v1[0] * v2[2] + v1[2] * v2[0],
            v1[0] * v2[1] - v1[1] * v2[0]
        );
    }

    static createNewMatrix(matrix, mas) {
        if (matrix.getMatrix().length !== mas.length || matrix.getMatrix()[0].length !== mas[0].length) {
            throw new LinearMathException("the length of the array differs from the space of the matrix");
        }
        switch (matrix.getMatrix().length) {
            case 3:
                return new Matrix3d(mas);
            case 4:
                return new Matrix4d(mas);
        }
        return null;
    }

    static matrixPlus(matrix1, matrix2) {
        if (matrix1.getMatrix().length !== matrix2.getMatrix().length || matrix1.getMatrix()[0].length !== matrix2.getMatrix()[0].length) {
            throw new LinearMathException("matrices of different dimensions");
        }
        let mas = matrix1.getMatrix().map(row => row.slice());
        for (let x = 0; x < mas.length; x++) {
            for (let y = 0; y < mas[0].length; y++) {
                mas[x][y] += matrix2.getMatrix()[x][y];
            }
        }
        return this.createNewMatrix(matrix1, mas);
    }

    static matrixMinus(matrix1, matrix2) {
        if (matrix1.getMatrix().length !== matrix2.getMatrix().length || matrix1.getMatrix()[0].length !== matrix2.getMatrix()[0].length) {
            throw new LinearMathException("matrices of different dimensions");
        }
        let mas = matrix1.getMatrix().map(row => row.slice());
        for (let x = 0; x < mas.length; x++) {
            for (let y = 0; y < mas[0].length; y++) {
                mas[x][y] -= matrix2.getMatrix()[x][y];
            }
        }
        return this.createNewMatrix(matrix1, mas);
    }

    static matrixMultiplication(matrix1, matrix2) {
        if (matrix1.getMatrix().length !== matrix2.getMatrix().length || matrix1.getMatrix()[0].length !== matrix2.getMatrix()[0].length) {
            throw new LinearMathException("matrices of different dimensions");
        }
        let mas = new Array(matrix1.getMatrix().length).fill(null).map(() => new Array(matrix1.getMatrix()[0].length).fill(0));
        let sum;
        for (let x = 0; x < mas.length; x++) {
            for (let y = 0; y < mas[0].length; y++) {
                sum = 0;
                for (let i = 0; i < mas.length; i++) {
                    sum += matrix1.getMatrix()[x][i] * matrix2.getMatrix()[i][y];
                }
                mas[x][y] = sum;
            }
        }
        return this.createNewMatrix(matrix1, mas);
    }

    static matrixVectorMultiplication(matrix, vector) {
        if (matrix.getMatrix().length !== vector.getVector().length) {
            throw new LinearMathException("matrix and vector of different dimensions");
        }
        let sum;
        let mas = new Array(vector.getVector().length).fill(0);
        for (let i = 0; i < mas.length; i++) {
            sum = 0;
            for (let j = 0; j < mas.length; j++) {
                sum += vector.getVector()[j] * matrix.getMatrix()[i][j];
            }
            mas[i] = sum;
        }
        return this.createNewVector(vector, mas);
    }

    static matrixTranspose(matrix) {
        let mas = matrix.getMatrix();
        let finalMas = new Array(mas.length).fill(null).map(() => new Array(mas[0].length).fill(0));
        for (let x = 0; x < mas.length; x++) {
            for (let y = 0; y < mas[0].length; y++) {
                finalMas[x][y] = mas[y][x];
            }
        }
        return this.createNewMatrix(matrix, finalMas);
    }

    static getZeroMatrix3d() {
        return new Matrix3d(new Array(3).fill(null).map(() => new Array(3).fill(0)));
    }

    static getUnitMatrix3d() {
        let matrix = new Array(3).fill(null).map(() => new Array(3).fill(1));
        return new Matrix3d(matrix);
    }

    static getZeroMatrix4d() {
        return new Matrix4d(new Array(4).fill(null).map(() => new Array(4).fill(0)));
    }

    static getUnitMatrix4d() {
        let matrix = new Array(4).fill(null).map(() => new Array(4).fill(1));
        return new Matrix4d(matrix);
    }
}

module.exports = LinearMath;
