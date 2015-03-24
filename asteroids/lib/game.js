!function() {
  if (typeof A === "undefined") {
    A = {};
  };

  var NUM_ASTEROIDS = 10;
  var COUNTER = 0;

  A.Game = function(dimX, dimY) {
    this.asteroids = [];
    this.dimX = dimX;
    this.dimY = dimY;
    this.addAsteroids();
    this.ship = new A.Ship(this.randomPosition(), this);
  }

  A.Game.prototype = {
    addAsteroids: function() {
      for (var i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new A.Asteroid(this.randomPosition(), this));
      }
    },

    draw: function(ctx) {
      ctx.clearRect(0, 0, this.dimX, this.dimY);
      for (var i = 0; i < this.allObjects().length; i++) {
        this.allObjects()[i].draw(ctx);
      }
    },

    moveObjects: function() {
      this.allObjects().forEach(function(object) {
        object.move();
      });
    },

    wrap: function(pos) {
      pos[0] = (pos[0] + this.dimX) % this.dimX;
      pos[1] = (pos[1] + this.dimY) % this.dimY;
    },

    checkCollisions: function() {
      var self = this;
      self.allObjects().forEach(function(object1) {
        self.allObjects().forEach(function(object2) {
          if (object1 !== object2 && object1.isCollidedWith(object2)) {
            object1.collideWith(object2);
          }
        });
      });
    },

    step: function() {
      this.moveObjects();
      this.checkCollisions();
    },

    remove: function(asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
    },

    allObjects: function() {
      return this.asteroids.concat(this.ship);
    },

    randomPosition: function() {
      return [Math.random() * this.dimX, Math.random() * this.dimY];
    }
  };
}();
