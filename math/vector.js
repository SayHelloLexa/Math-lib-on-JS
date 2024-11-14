'use strict';

class Vector {
  constructor(vector) {
      this.vector = vector;
  }

  getVector() {
      return this.vector;
  }

  setCoordinates(vector) {
      if (vector.length !== this.vector.length) {
          throw new Error("The specified vector differs in size from the original one");
      }
      this.vector = vector;
      return true;
  }

  equals(other) {
      if (other.getVector().length !== this.vector.length) {
          return false;
      }
      const eps = 1e-7;
      for (let i = 0; i < this.vector.length; i++) {
          if (Math.abs(this.vector[i] - other.getVector()[i]) >= eps) {
              return false;
          }
      }
      return true;
  }
}

module.exports = Vector;