'use strict';

const LinearMath = require('../linearMath/linearMath.js');
const LinearMathException = require('../linearMath/linearMathException.js');
const Matrix3d = require('../math/matrix3d.js');
const Matrix4d = require('../math/matrix4d.js');
const Vector2f = require('../math/vector2f.js');
const Vector3f = require('../math/vector3f.js');
const Vector4f = require('../math/vector4f.js');

test('testVector2fPlus', () => {
    const vector1 = new Vector2f(-5, 7);
    const vector2 = new Vector2f(3, -15);
    const result = LinearMath.vectorPlus(vector1, vector2);
    const expectedResult = new Vector2f(-2, -8);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fPlus', () => {
    const vector1 = new Vector3f(5, 7, 3);
    const vector2 = new Vector3f(2, -15, -3);
    const result = LinearMath.vectorPlus(vector1, vector2);
    const expectedResult = new Vector3f(7, -8, 0);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fPlus', () => {
    const vector1 = new Vector4f(5.5, 7.7, 3.3, 1);
    const vector2 = new Vector4f(2.2, -15.5, -3.3, -1.1);
    const result = LinearMath.vectorPlus(vector1, vector2);
    const expectedResult = new Vector4f(7.7, -7.8, 0, -0.1);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVectorPlusException', () => {
    const vector1 = new Vector2f(5, 7);
    const vector2 = new Vector3f(2, -15, -3);
    expect(() => {
        LinearMath.vectorPlus(vector1, vector2);
    }).toThrow(new LinearMathException("Error in the Math library with error: Vectors of different spaces"));
});

test('testVector2fMinus', () => {
    const vector1 = new Vector2f(-5, 7);
    const vector2 = new Vector2f(3, -15);
    const result = LinearMath.vectorMinus(vector1, vector2);
    const expectedResult = new Vector2f(-8, 22);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fMinus', () => {
    const vector1 = new Vector3f(5, 7, 3);
    const vector2 = new Vector3f(2, -15, -3);
    const result = LinearMath.vectorMinus(vector1, vector2);
    const expectedResult = new Vector3f(3, 22, 6);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fMinus', () => {
    const vector1 = new Vector4f(5.5, 7.7, 3.3, 1);
    const vector2 = new Vector4f(2.2, -15.5, -3.3, -1.1);
    const result = LinearMath.vectorMinus(vector1, vector2);
    const expectedResult = new Vector4f(3.3, 23.2, 6.6, 2.1);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVectorMinusException', () => {
    const vector1 = new Vector2f(5, 7);
    const vector2 = new Vector3f(2, -15, -3);
    expect(() => {
        LinearMath.vectorMinus(vector1, vector2);
    }).toThrow(new LinearMathException("Error in the Math library with error: Vectors of different spaces"));
});

test('testVector2fMultiplication', () => {
    const vector1 = new Vector2f(-5, 7);
    const val = 3.5;
    const result = LinearMath.vectorMultiplication(vector1, val);
    const expectedResult = new Vector2f(-17.5, 24.5);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fMultiplication', () => {
    const vector1 = new Vector3f(-5, 7, -19);
    const val = 2;
    const result = LinearMath.vectorMultiplication(vector1, val);
    const expectedResult = new Vector3f(-10, 14, -38);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fMultiplication', () => {
    const vector1 = new Vector4f(-5, 7, -19, 20);
    const val = 4;
    const result = LinearMath.vectorMultiplication(vector1, val);
    const expectedResult = new Vector4f(-20, 28, -76, 80);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector2fDivision', () => {
    const vector1 = new Vector2f(-5, 7);
    const val = 2;
    const result = LinearMath.vectorDivision(vector1, val);
    const expectedResult = new Vector2f(-2.5, 3.5);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fDivision', () => {
    const vector1 = new Vector3f(-5, 7, -19);
    const val = 2;
    const result = LinearMath.vectorDivision(vector1, val);
    const expectedResult = new Vector3f(-2.5, 3.5, -9.5);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fDivision', () => {
    const vector1 = new Vector4f(-5, 7, -19, 20);
    const val = 4;
    const result = LinearMath.vectorDivision(vector1, val);
    const expectedResult = new Vector4f(-1.25, 1.75, -4.75, 5);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVectorDivisionException', () => {
    const vector1 = new Vector2f(5, 7);
    const val = 0;
    expect(() => {
        LinearMath.vectorDivision(vector1, val);
    }).toThrow(new LinearMathException("Error in the Math library with error: division by zero"));
});

test('testVector2fGetLength', () => {
    const scale = Math.pow(10, 3);
    const vector1 = new Vector2f(5, 7);
    const result = LinearMath.getLength(vector1);
    const expectedResult = 8.60232526704;
    expect(Math.ceil(expectedResult * scale) / scale).toBe(Math.ceil(result * scale) / scale);
});

test('testVector3fGetLength', () => {
    const scale = Math.pow(10, 3);
    const vector1 = new Vector3f(2, 3, 6);
    const result = LinearMath.getLength(vector1);
    const expectedResult = 7.0;
    expect(Math.ceil(expectedResult * scale) / scale).toBe(Math.ceil(result * scale) / scale);
});

test('testVector4fGetLength', () => {
    const scale = Math.pow(10, 3);
    const vector1 = new Vector4f(2, 3, 6, 1);
    const result = LinearMath.getLength(vector1);
    const expectedResult = 7.21110255093;
    expect(Math.ceil(expectedResult * scale) / scale).toBe(Math.ceil(result * scale) / scale);
});

test('testVector2fNormalization', () => {
    const vector1 = new Vector2f(2, 3);
    const result = LinearMath.vectorNormalization(vector1);
    const expectedResult = new Vector2f(0.554700196225, 0.832050294338);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fNormalization', () => {
    const vector1 = new Vector3f(2, 3, 6);
    const result = LinearMath.vectorNormalization(vector1);
    const expectedResult = new Vector3f(0.285714285714, 0.428571428571, 0.857142857143);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fNormalization', () => {
    const vector1 = new Vector4f(2, 3, 6, 1);
    const result = LinearMath.vectorNormalization(vector1);
    expect(Math.abs(1 - LinearMath.getLength(result)) < 1e-7).toBe(true);
});

test('testVector2fScalarProduct', () => {
    const vector1 = new Vector2f(-5, 7);
    const vector2 = new Vector2f(3, -15);
    const result = LinearMath.vectorScalarProduct(vector1, vector2);
    const expectedResult = 110;
    expect(result).toBe(expectedResult);
});

test('testVector3fScalarProduct', () => {
    const vector1 = new Vector3f(5, 7, 3);
    const vector2 = new Vector3f(2, -15, -3);
    const result = LinearMath.vectorScalarProduct(vector1, vector2);
    const expectedResult = -102;
    expect(result).toBe(expectedResult);
});

test('testVector4fScalarProduct', () => {
    const vector1 = new Vector4f(1, 2, 3, 4);
    const vector2 = new Vector4f(2, 3, 4, 5);
    const result = LinearMath.vectorScalarProduct(vector1, vector2);
    const expectedResult = 40;
    expect(result).toBe(expectedResult);
});

test('testVectorScalarProductException', () => {
    const vector1 = new Vector2f(5, 7);
    const vector2 = new Vector3f(2, -15, -3);
    expect(() => {
        LinearMath.vectorScalarProduct(vector1, vector2);
    }).toThrow(new LinearMathException("Error in the Math library with error: Vectors of different spaces"));
});

test('testVectorProduct', () => {
    const vector1 = new Vector3f(2, 3, 4);
    const vector2 = new Vector3f(5, 6, 7);
    const result = LinearMath.vectorProduct(vector1, vector2);
    const expectedResult = new Vector3f(-3, 6, -3);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrix3dPlus', () => {
    const matrix1 = new Matrix3d([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const matrix2 = new Matrix3d([
        [3, 2, 1],
        [6, 5, 4],
        [9, 8, 7]
    ]);
    const result = LinearMath.matrixPlus(matrix1, matrix2);
    const expectedResult = new Matrix3d([
        [4, 4, 4],
        [10, 10, 10],
        [16, 16, 16]
    ]);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrix4dPlus', () => {
    const matrix1 = new Matrix4d([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]);
    const matrix2 = new Matrix4d([
        [2, 3, 4, 5],
        [6, 7, 8, 9],
        [10, 11, 12, 13],
        [14, 15, 16, 17]
    ]);
    const result = LinearMath.matrixPlus(matrix1, matrix2);
    const expectedResult = new Matrix4d([
        [3, 5, 7, 9],
        [11, 13, 15, 17],
        [19, 21, 23, 25],
        [27, 29, 31, 33]
    ]);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrixPlusException', () => {
    const matrix1 = new Matrix3d([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const matrix2 = new Matrix4d([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]);
    expect(() => {
        LinearMath.matrixPlus(matrix1, matrix2);
    }).toThrow(new LinearMathException("Error in the Math library with error: matrices of different dimensions"));
});

test('testMatrix3dMinus', () => {
    const matrix1 = new Matrix3d([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const matrix2 = new Matrix3d([
        [3, 2, 1],
        [6, 5, 4],
        [9, 8, 7]
    ]);
    const result = LinearMath.matrixMinus(matrix1, matrix2);
    const expectedResult = new Matrix3d([
        [-2, 0, 2],
        [-2, 0, 2],
        [-2, 0, 2]
    ]);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrix4dMinus', () => {
    const matrix1 = new Matrix4d([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]);
    const matrix2 = new Matrix4d([
        [2, 3, 4, 5],
        [6, 7, 8, 9],
        [10, 11, 12, 13],
        [14, 15, 16, 17]
    ]);
    const result = LinearMath.matrixMinus(matrix1, matrix2);
    const expectedResult = new Matrix4d([
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1]
    ]);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrixMinusException', () => {
    const matrix1 = new Matrix3d([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const matrix2 = new Matrix4d([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]);
    expect(() => {
        LinearMath.matrixMinus(matrix1, matrix2);
    }).toThrow(new LinearMathException("Error in the Math library with error: matrices of different dimensions"));
});

test('testMatrix3dMultiplication', () => {
    const matrix1 = new Matrix3d([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const matrix2 = new Matrix3d([
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ]);
    const result = LinearMath.matrixMultiplication(matrix1, matrix2);
    const expectedResult = new Matrix3d([
        [30, 24, 18],
        [84, 69, 54],
        [138, 114, 90]
    ]);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrix4dMultiplication', () => {
    const matrix1 = new Matrix4d([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]);
    const matrix2 = new Matrix4d([
        [5, 5, 5, 5],
        [5, 0, 5, 5],
        [5, 5, 5, 5],
        [5, 5, 5, 5]
    ]);
    const result = LinearMath.matrixMultiplication(matrix1, matrix2);
    const expectedResult = new Matrix4d([
        [55, 44, 55, 55],
        [143, 110, 143, 143],
        [231, 176, 231, 231],
        [319, 242, 319, 319]
    ]);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrixMultiplicationException', () => {
    const matrix1 = new Matrix3d([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const matrix2 = new Matrix4d([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]);
    expect(() => {
        LinearMath.matrixMultiplication(matrix1, matrix2);
    }).toThrow(new LinearMathException("Error in the Math library with error: matrices of different dimensions"));
});

test('testMatrix3dVector3fMultiplication', () => {
    const matrix = new Matrix3d([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const vector = new Vector3f(10, 5, 1);
    const result = LinearMath.matrixVectorMultiplication(matrix, vector);
    const expectedResult = new Vector3f(23, 71, 119);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrix4dVector4fMultiplication', () => {
    const matrix = new Matrix4d([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]);
    const vector = new Vector4f(10, 5, 1, 1);
    const result = LinearMath.matrixVectorMultiplication(matrix, vector);
    const expectedResult = new Vector4f(27, 95, 163, 231);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrixVectorMultiplicationException', () => {
    const matrix = new Matrix4d([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]);
    const vector = new Vector3f(10, 5, 1);
    expect(() => {
        LinearMath.matrixVectorMultiplication(matrix, vector);
    }).toThrow(new LinearMathException("Error in the Math library with error: matrix and vector of different dimensions"));
});

test('testMatrixTranspose', () => {
    const matrix = new Matrix3d([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const result = LinearMath.matrixTranspose(matrix);
    const expectedResult = new Matrix3d([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ]);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testGetUnitMatrix3d', () => {
    const result = LinearMath.getUnitMatrix3d();
    const expectedResult = new Matrix3d([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ]);
    expect(result.equals(expectedResult)).toBe(true);
});
