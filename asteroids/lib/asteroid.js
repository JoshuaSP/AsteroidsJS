!function() {
  if (typeof A === "undefined") {
    A = {};
  };

  var COLOR = '#7f8c8d';
  var RADIUS = 60;
  var MAXSPEED = 20;


  A.Asteroid = function (pos, game){
    A.MovingObject.call(this, {
      pos: pos,
      vel: A.util.randomVector(MAXSPEED),
      radius: RADIUS,
      color: COLOR,
      arc: Math.PI * 2,
      game: game
    });
  };

  A.Asteroid.prototype = {
    COLOR: COLOR,
    RADIUS: RADIUS
  };

  A.util.inherits(A.MovingObject, A.Asteroid);
}();
