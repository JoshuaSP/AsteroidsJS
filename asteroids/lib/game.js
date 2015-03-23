(function() {
  window.A = A || {};

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var DIM_X = canvas.width;
  var DIM_Y = canvas.height;
  var NUM_ASTEROIDS = 15;

  A.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  }

  A.Game.prototype = {
    addAsteroids: function() {
      for (var i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid(A.util.randomPosition(DIM_X, DIM_Y)));
      }
    },

    draw: function(ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
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
