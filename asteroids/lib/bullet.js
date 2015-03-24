!function() {
  if (typeof A === "undefined") {
    A = {};
  };

  var COLOR = '#ff9700';
  var RADIUS = 8;
  var ARC = 2 * Math.PI;
  var SPEED = 1.5;

  A.Bullet = function(ship, game) {
    var startPos = ship.pos.concat([]);
    var startVel = ship.vel;
    A.MovingObject.call(this, {
      vel: A.util.multiply(startVel, SPEED),
      pos: startPos,
      game: game,
      color: COLOR,
      radius: RADIUS,
      arc: ARC
    });
  };

  A.util.inherits(A.MovingObject, A.Bullet);

  A.Bullet.prototype.collideWith = function(otherObj) {
    if (otherObj instanceof A.Asteroid) {
      this.game.remove(otherObj);
      this.game.remove(this);
    }
  }

  A.Bullet.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.pos[0] < 0 || this.pos[1] < 0 ||
        this.pos[0] > this.game.dimX || this.pos[1] > this.game.dimY ) {
      this.game.remove(this);
    }
  };
}();
