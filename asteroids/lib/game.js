(function() {
  if (typeof A === "undefined") {
    A = {};
  };

  var NUM_ASTEROIDS = 7;

  A.Game = function(dimX, dimY) {
    this.asteroids = [];
    this.dimX = dimX;
    this.dimY = dimY;
    this.addAsteroids();
  }

  A.Game.prototype = {
    addAsteroids: function() {
      for (var i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new A.Asteroid(A.util.randomPosition(this.dimX, this.dimY), this));
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
    },

    wrap: function(pos) {
      pos[0] = (pos[0] + this.dimX) % this.dimX;
      pos[1] = (pos[1] + this.dimY) % this.dimY;
    },

    checkCollisions: function() {
      var self = this;
      self.asteroids.forEach(function(asteroid1) {
        self.asteroids.forEach(function(asteroid2) {
          if (asteroid1 !== asteroid2 && asteroid1.isCollidedWith(asteroid2)) {
            asteroid1.collideWith(asteroid2);
          }
        })
      })
    },

    step: function() {
      this.moveObjects();
      this.checkCollisions();
    },

    remove: function(asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
    }
  };
})();
