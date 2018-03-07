var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style. var
  var someInstance = {};

  someInstance.storage = {};
  someInstance.count = 0;  
  extend(someInstance, stackMethods);
  //var test = true;
  return someInstance;
  
};

var extend = function(obj, methods ){
  for(var key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {

  push: function(value) {
    this.storage[this.count] = value; 
    this.count++;
  },
  pop: function() {
    if(this.count > 0){
      this.count--;      
      let removed = this.storage[this.count];
      delete this.storage[this.count];
      return removed;
    }     
  },

  size: function() {
    return this.count;

  }

};

