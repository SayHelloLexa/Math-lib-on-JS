'use strict';

const Vector = require('./vector.js');

class Vector3f extends Vector {
  constructor(x, y, z) {
      super([x, y, z]);
  }
}

module.exports = Vector3f;