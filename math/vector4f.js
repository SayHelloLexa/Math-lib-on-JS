'use strict';

const Vector = require('./vector.js');

class Vector4f extends Vector {
  constructor(x, y, z, w) {
      super([x, y, z, w]);
  }
}

module.exports = Vector4f;