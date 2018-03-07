var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var removed;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (count > 0) {
      let tempStore = {};
      for(let key in storage) {
        tempStore[parseInt(key) + 1] = storage[key];
      }
      tempStore[0] = value;
      storage = tempStore;
    } else {
      storage[count] = value;
    } 
    count++;
  };

  someInstance.dequeue = function() {    
    count--;
    if(count < 0) count = 0;
    removed = storage[count];
    delete storage[count];
    return removed;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
