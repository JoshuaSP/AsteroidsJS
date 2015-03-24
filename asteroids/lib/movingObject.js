!function() {
  if (typeof A === "undefined") {
    A = {};
  };

  A.MovingObject = function(opts) {
    this.pos = opts.pos;
    this.vel = opts.vel;
    this.radius = opts.radius;
    this.color = opts.color;
    this.arc = opts.arc || (Math.PI * 2);
    this.game = opts.game;
  };

  A.MovingObject.prototype = {
    draw: function(ctx) {
      var startAngle = 0;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos[0],
        this.pos[1],
        this.radius,
        startAngle,
        startAngle + this.arc,
        false);
      ctx.fill();
    },

    move: function() {
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
      this.game.wrap(this.pos);
    },

    isCollidedWith: function(otherObj) {
      return A.util.distance(this.pos, otherObj.pos) < this.radius + otherObj.radius;
    },

    collideWith: function(otherObj) {
    }
  };

}();
