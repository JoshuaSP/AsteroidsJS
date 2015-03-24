!function() {
  if (typeof A === "undefined") {
    A = {};
  };

  var COLOR = '#7f8c8d';
  var RADIUS = 40;
  var MAXSPEED = 5;


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

  A.util.inherits(A.MovingObject, A.Asteroid);

  A.Asteroid.prototype.collideWith = function(otherObj) {
    if (otherObj instanceof A.Ship) {
      otherObj.relocate();
    }
  };

}();
