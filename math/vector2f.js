'use strict';

const Vector = require('./vector.js');

class Vector2f extends Vector {
  constructor(x, y) {
      super([x, y]);
  }
}

module.exports = Vector2f;