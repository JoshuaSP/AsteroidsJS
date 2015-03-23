!function() {
  window.A = A || {};

  A.util = {
    inherits: function(parent, child) {
      function Surrogate() {}
      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate();
      child.prototype.parent = parent;
    },

    randomVector: function(range) {
      return([Math.random() * 2 * range - range, Math.random() * 2 * range - range]);
    }

}();
