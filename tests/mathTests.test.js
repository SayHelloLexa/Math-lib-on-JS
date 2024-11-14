'use strict';

const LinearMath = require('../linearMath/linearMath.js');
const LinearMathException = require('../linearMath/linearMathException.js');
const Matrix3d = require('../math/matrix3d.js');
const Matrix4d = require('../math/matrix4d.js');
const Vector2f = require('../math/vector2f.js');
const Vector3f = require('../math/vector3f.js');
const Vector4f = require('../math/vector4f.js');

test('testVector2fPlus', () => {
    const vector1 = new Vector2f(-10, 2);
    const vector2 = new Vector2f(4, -50);
    const result = LinearMath.vectorPlus(vector1, vector2);
    const expectedResult = new Vector2f(-6, -48);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fPlus', () => {
    const vector1 = new Vector3f(10, 2, 8);
    const vector2 = new Vector3f(4, -50, -8);
    const result = LinearMath.vectorPlus(vector1, vector2);
    const expectedResult = new Vector3f(14, -48, 0);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fPlus', () => {
    const vector1 = new Vector4f(11.11, 12.12, 13.222, 1);
    const vector2 = new Vector4f(12.11, -10.01, -8, -2.1);
    const result = LinearMath.vectorPlus(vector1, vector2);
    const expectedResult = new Vector4f(23.22, 2.11, 5.222, -1.1);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVectorPlusException', () => {
    const vector1 = new Vector2f(10, 2);
    const vector2 = new Vector3f(4, -50, -8);
    expect(() => {
        LinearMath.vectorPlus(vector1, vector2);
    }).toThrow(new LinearMathException("Error in the Math library with error: Vectors of different spaces"));
});

test('testVector2fMinus', () => {
    const vector1 = new Vector2f(-10, 2);
    const vector2 = new Vector2f(4, -50);
    const result = LinearMath.vectorMinus(vector1, vector2);
    const expectedResult = new Vector2f(-14, 52);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fMinus', () => {
    const vector1 = new Vector3f(10, 2, 8);
    const vector2 = new Vector3f(4, -50, -8);
    const result = LinearMath.vectorMinus(vector1, vector2);
    const expectedResult = new Vector3f(6, 52, 16);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fMinus', () => {
    const vector1 = new Vector4f(11.11, 12.12, 13.222, 1);
    const vector2 = new Vector4f(12.11, -10.01, -8, -2.1);
    const result = LinearMath.vectorMinus(vector1, vector2);
    const expectedResult = new Vector4f(-1, 22.13, 21.222, 3.1);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVectorMinusException', () => {
    const vector1 = new Vector2f(10, 2);
    const vector2 = new Vector3f(4, -50, -8);
    expect(() => {
        LinearMath.vectorMinus(vector1, vector2);
    }).toThrow(new LinearMathException("Error in the Math library with error: Vectors of different spaces"));
});

test('testVector2fMultiplication', () => {
    const vector1 = new Vector2f(-10, 2);
    const val = 2.5;
    const result = LinearMath.vectorMultiplication(vector1, val);
    const expectedResult = new Vector2f(-25, 5);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fMultiplication', () => {
    const vector1 = new Vector3f(-10, 2, -19);
    const val = 0;
    const result = LinearMath.vectorMultiplication(vector1, val);
    const expectedResult = new Vector3f(0, 0, 0);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fMultiplication', () => {
    const vector1 = new Vector4f(-10, 2, -19, 20);
    const val = 3;
    const result = LinearMath.vectorMultiplication(vector1, val);
    const expectedResult = new Vector4f(-30, 6, -57, 60);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector2fDivision', () => {
    const vector1 = new Vector2f(-10, 2);
    const val = 2;
    const result = LinearMath.vectorDivision(vector1, val);
    const expectedResult = new Vector2f(-5, 1);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fDivision', () => {
    const vector1 = new Vector3f(-10, 2, -19);
    const val = 0.5;
    const result = LinearMath.vectorDivision(vector1, val);
    const expectedResult = new Vector3f(-20, 4, -38);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fDivision', () => {
    const vector1 = new Vector4f(-10, 2, -19, 20);
    const val = -5;
    const result = LinearMath.vectorDivision(vector1, val);
    const expectedResult = new Vector4f(2, -0.4, 3.8, -4);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVectorDivisionException', () => {
    const vector1 = new Vector2f(10, 2);
    const val = 0;
    expect(() => {
        LinearMath.vectorDivision(vector1, val);
    }).toThrow(new LinearMathException("Error in the Math library with error: division by zero"));
});

test('testVector2fGetLength', () => {
    const scale = Math.pow(10, 3);
    const vector1 = new Vector2f(10, 3);
    const result = LinearMath.getLength(vector1);
    const expectedResult = 10.440306508910;
    expect(Math.ceil(expectedResult * scale) / scale).toBe(Math.ceil(result * scale) / scale);
});

test('testVector3fGetLength', () => {
    const scale = Math.pow(10, 3);
    const vector1 = new Vector3f(4, 2, 2);
    const result = LinearMath.getLength(vector1);
    const expectedResult = 4.89897948556;
    expect(Math.ceil(expectedResult * scale) / scale).toBe(Math.ceil(result * scale) / scale);
});

test('testVector4fGetLength', () => {
    const scale = Math.pow(10, 3);
    const vector1 = new Vector4f(4, 2, 2, 19);
    const result = LinearMath.getLength(vector1);
    const expectedResult = 19.62141687034;
    expect(Math.ceil(expectedResult * scale) / scale).toBe(Math.ceil(result * scale) / scale);
});

test('testVector2fNormalization', () => {
    const vector1 = new Vector2f(4, 2);
    const result = LinearMath.vectorNormalization(vector1);
    const expectedResult = new Vector2f(0.89442718, 0.44721359);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector3fNormalization', () => {
    const vector1 = new Vector3f(-5, 2, 7);
    const result = LinearMath.vectorNormalization(vector1);
    const expectedResult = new Vector3f(-0.56613857, 0.22645542, 0.79259396);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testVector4fNormalization', () => {
    const vector1 = new Vector4f(-5, 2, 7, 9);
    const result = LinearMath.vectorNormalization(vector1);
    expect(Math.abs(1 - LinearMath.getLength(result)) < 1e-7).toBe(true);
});

test('testVector2fScalarProduct', () => {
    const vector1 = new Vector2f(-10, 2);
    const vector2 = new Vector2f(4, -50);
    const result = LinearMath.vectorScalarProduct(vector1, vector2);
    const expectedResult = -140;
    expect(result).toBe(expectedResult);
});

test('testVector3fScalarProduct', () => {
    const vector1 = new Vector3f(10, 2, 8);
    const vector2 = new Vector3f(4, -50, -8);
    const result = LinearMath.vectorScalarProduct(vector1, vector2);
    const expectedResult = -124;
    expect(result).toBe(expectedResult);
});

test('testVector4fScalarProduct', () => {
    const vector1 = new Vector4f(1, 2, 3, 4);
    const vector2 = new Vector4f(1, 2, 3, 4);
    const result = LinearMath.vectorScalarProduct(vector1, vector2);
    const expectedResult = 30;
    expect(result).toBe(expectedResult);
});

test('testVectorScalarProductException', () => {
    const vector1 = new Vector2f(10, 2);
    const vector2 = new Vector3f(4, -50, -8);
    expect(() => {
        LinearMath.vectorScalarProduct(vector1, vector2);
    }).toThrow(new LinearMathException("Error in the Math library with error: Vectors of different spaces"));
});

test('testVectorProduct', () => {
    const vector1 = new Vector3f(5, 9, 12);
    const vector2 = new Vector3f(14, 5.6, 7.7);
    const result = LinearMath.vectorProduct(vector1, vector2);
    const expectedResult = new Vector3f(2.1, 129.5, -98);
    expect(result.equals(expectedResult)).toBe(true);
});

test('testMatrix3dPlus', () => {
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
    const result = LinearMath.matrixPlus(matrix1, matrix2);
    const expectedResult = new Matrix3d([
        [10, 10, 10],
        [10, 10, 10],
        [10, 10, 10]
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
        [5.5, 5.5, 5.5, 5.5],
        [5.5, 0, 5.5, 5.5],
        [5.5, 5.5, 5.5, 5.5],
        [5.5, 5.5, 5.5, 5.5]
    ]);
    const result = LinearMath.matrixPlus(matrix1, matrix2);
    const expectedResult = new Matrix4d([
        [6.5, 7.5, 8.5, 9.5],
        [10.5, 6, 12.5, 13.5],
        [14.5, 15.5, 16.5, 17.5],
        [18.5, 19.5, 20.5, 21.5]
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
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ]);
    const result = LinearMath.matrixMinus(matrix1, matrix2);
    const expectedResult = new Matrix3d([
        [-8, -6, -4],
        [-2, 0, 2],
        [4, 6, 8]
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
        [5.5, 5.5, 5.5, 5.5],
        [5.5, 0, 5.5, 5.5],
        [5.5, 5.5, 5.5, 5.5],
        [5.5, 5.5, 5.5, 5.5]
    ]);
    const result = LinearMath.matrixMinus(matrix1, matrix2);
    const expectedResult = new Matrix4d([
        [-4.5, -3.5, -2.5, -1.5],
        [-0.5, 6, 1.5, 2.5],
        [3.5, 4.5, 5.5, 6.5],
        [7.5, 8.5, 9.5, 10.5]
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
        [5.5, 5.5, 5.5, 5.5],
        [5.5, 0, 5.5, 5.5],
        [5.5, 5.5, 5.5, 5.5],
        [5.5, 5.5, 5.5, 5.5]
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
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]);
    expect(result.equals(expectedResult)).toBe(true);
});
