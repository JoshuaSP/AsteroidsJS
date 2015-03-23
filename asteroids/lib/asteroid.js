!function() {
  window.A = A || {};

  var COLOR = 0x7f8c8d;
  var RADIUS = 80;
  var MAXSPEED = 20;

  A.util.inherits(A.MovingObject, A.Asteroid);

  A.Asteroid = function (pos){
    A.MovingObject.apply(this, {
      pos: pos,
      vel: A.util.randomVec(MAXSPEED),
      radius: RADIUS,
      color: COLOR,
      arc: Math.PI * 2
    });
  };

  A.Asteroid.prototype = {
    COLOR: COLOR,
    RADIUS: RADIUS
  };


}();
