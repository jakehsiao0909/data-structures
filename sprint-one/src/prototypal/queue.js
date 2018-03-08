var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    if (this.count > 0) {
      var tempStore = {};
      for (var key in this.storage) {
        tempStore[parseInt(key) + 1] = this.storage[key];
      }
      tempStore[0] = value;
      this.storage = tempStore;
    }
    else {
      this.storage[this.count] = value;
    }
    this.count++;
  },

  dequeue: function() {
    this.count--;
    if (this.count < 0) this.count = 0;
    var removed = this.storage[this.count];
    delete this.storage[this.count];
    return removed;
  },

  size: function(){
    return this.count;
  }
};


