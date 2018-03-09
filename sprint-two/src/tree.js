var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

  //TimeComplexity: O(1)
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

  //TimeComplexity: O(n)
treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  else {
    return this.children.some(function(child) {
      return child.contains(target);
    });
  }
};


var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
