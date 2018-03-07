var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  extend(storage, stackMethods);
  count = 0;
  return storage;
};

var extend = function(obj, methods ){
  for(var key in methods) {
    obj[key] = methods[key];
  }

};

var stackMethods = {

  push: function(value) {
    count++;
  },
  pop: function() {
    if (count > 0) count--;
  },

  size: function() {
    return count;
  }

};


