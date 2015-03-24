!function() {
  if (typeof A === "undefined") {
    A = {};
  };


  A.GameView = function(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.game = new A.Game(this.canvas.width, this.canvas.height);
  }

  A.GameView.prototype.start = function() {
    var self = this;
    var img = new Image();
    img.src = 'lib/deepSpace.jpg';
    self.bindKeyHandlers();
    setInterval(function() {
      self.game.step();
      self.game.draw(self.ctx, img);
    }, 20);
  };

  A.GameView.prototype.bindKeyHandlers = function() {
    var self = this;
    key('space', function() {
      self.game.ship.fireBullet();
    });
    key('up', function() {
      self.game.ship.power([0, -1]);
    });
    key('down', function() {
      self.game.ship.power([0, 1]);
    });
    key('left', function() {
      self.game.ship.power([-1, 0]);
    });
    key('right', function() {
      self.game.ship.power([1, 0]);
    });
  };

}();
