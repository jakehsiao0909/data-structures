var BinarySearchTree = function(value) {
  var someTree = Object.create(BinarySearchTree.prototype)

  someTree.left = null;
  someTree.right = null;
  someTree.value = value;
  return someTree;
};

  //TimeComplexity: O(log n)
BinarySearchTree.prototype.insert = function(value) {


  if (this.value > value) {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    }
    else {
      this.left.insert(value)
    }
  }

  if (this.value < value) {
    if (!this.right) {
      this.right = BinarySearchTree(value);
    }
    else {
      this.right.insert(value)
    }
  }
};

  //TimeComplexity: O(log n)
BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) return true;

  if (this.value > target) {
    if (this.left) {
      return this.left.contains(target)
    }
  }

  if (this.value < target) {
    if (this.right) {
      return this.right.contains(target)
    }
  }

  return false;
};


  //TimeComplexity: O(n)
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  function recurseTree(tree){
    callback.call(tree,tree.value);
    if(tree.left !== null){
      recurseTree(tree.left);
    }
    if(tree.right !== null){
      recurseTree(tree.right);
    }
  }
  recurseTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
