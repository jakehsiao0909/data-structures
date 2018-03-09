var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
  this.size++;
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  var removed = this._storage[item]
  delete this._storage[item]
  return removed;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
