!function() {
  if (typeof A === "undefined") {
    A = {};
  }
  if (typeof A === "undefined") {
  A = {};
};

  A.util = {
    inherits: function(parent, child) {
      function Surrogate() {}
      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate();
      child.prototype.parent = parent;
    },

    randomVector: function(range) {
      return([Math.random() * 2 * range - range, Math.random() * 2 * range - range]);
    },

    distance: function(vector1, vector2) {
      return Math.sqrt(Math.pow((vector1[0] - vector2[0]), 2) + Math.pow((vector1[1] - vector2[1]), 2))
    }

  };

}();
