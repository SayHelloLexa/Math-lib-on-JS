class LinearMathException extends Error {
  constructor(errorMessage) {
      super(`Error in the Math library with error: ${errorMessage}`);
      this.name = 'LinearMathException';
  }
}

module.exports = LinearMathException;