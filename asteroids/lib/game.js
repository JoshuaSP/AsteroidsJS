(function() {
  if (typeof A === "undefined") {
    A = {};
  };

  var NUM_ASTEROIDS = 15;

  A.Game = function(dimX, dimY) {
    this.asteroids = [];
    this.dimX = dimX;
    this.dimY = dimY;
    this.addAsteroids();
  }

  A.Game.prototype = {
    addAsteroids: function() {
      for (var i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new A.Asteroid(A.util.randomPosition(this.dimX, this.dimY)));
      }
    },

    draw: function(ctx) {
      ctx.clearRect(0, 0, this.dimX, this.dimY);
      for (var i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
      }
    },

    moveObjects: function() {
      this.asteroids.forEach(function(asteroid) {
        asteroid.move();
      });
    }
  };
})();
