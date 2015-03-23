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
    setInterval(function() {
      self.game.step();
      self.game.draw(self.ctx);
    }, 20);
  };

}();
