var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var check = false;
  var bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  bucket.forEach(function(tuple) {
    if (tuple[0] === k) {
      tuple[1] = v;
      check = true;
    }
  });
  
  
    if (!check) {
      bucket.push([k, v]);
      this.count++;
    }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (!this._storage.get(index)) return null;
  var bucket = this._storage.get(index);

  var lookup;

  bucket.forEach(function(tuple) {
    if (tuple[0] === k) lookup = tuple[1];
  });
  return lookup;
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) return null;

  var bucket = this._storage.get(index);

  bucket.forEach(function(tuple, index) {
    if (tuple[0] === k) {
      bucket.splice(index, 1);
    }
    this.count--;
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
