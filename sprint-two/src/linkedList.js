var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var node = new Node(value);
    list.head = list.head || node;

    if(list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var removed = list.head;
    list.head = list.head.next;
    return removed.value
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
