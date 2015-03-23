function sum () {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(a, b) {
    return a + b;
  }, 0);
}

Function.prototype.myBind = function(obj) {
  var args = Array.prototype.slice.call(arguments, 1);
  var func = this;
  return function () {
    var args2 = Array.prototype.slice.call(arguments, 0);
    return func.apply(obj, args.concat(args2));
  };
};

Function.prototype.curry = function(numArgs) {
  var args = [];
  var func = this;
  function curried(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return func.apply(null, args);
    } else {
      return curried;
    }
  }
  return curried;
};
