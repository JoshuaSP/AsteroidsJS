!function() {
  if (typeof A === "undefined") {
    A = {};
  };

  var COLOR = '#01ca7e';
  var RADIUS = 20;
  var ARC = 2 * Math.PI;
  var IMPULSE = 1.2;
  var MAXSPEED = 10;

  A.Ship = function (pos, game) {
    A.MovingObject.call(this, {
      vel: [0,0],
      pos: pos,
      game: game,
      color: COLOR,
      radius: RADIUS,
      arc: ARC
    });
  };

  A.util.inherits(A.MovingObject, A.Ship);

  A.Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  };

  A.Ship.prototype.power = function(impulse) {
    this.vel = [this.vel[0] + IMPULSE * impulse[0], this.vel[1] + IMPULSE * impulse[1]];
    this.vel = this.vel.map(function(coord) {
      if (Math.abs(coord) > MAXSPEED) {
        return Math.abs(coord) / coord * MAXSPEED;
      } else {
        return coord;
      }
    });
  };

  A.Ship.prototype.fireBullet = function () {
    if (A.util.distance([0,0], this.vel)) {
      var bullet = new A.Bullet(this, this.game);
      this.game.addBullet(bullet);
    }
  };

}();
