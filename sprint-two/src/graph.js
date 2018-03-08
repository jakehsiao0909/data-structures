

// Instantiate a new graph
var Graph = function() {
  
  this.nodes = {};
  this.counter = 1;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
  this.nodes[node].edges = [];
  this.nodes[node].id = this.counter;
  this.counter++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let id = this.nodes[node];
  for(let x in this.nodes){
    this.nodes[x].edges.splice(this.nodes[x].edges.indexOf(id),1);
  }
  delete this.nodes[node]
  return this.nodes;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edges.includes(toNode.id) && this.nodes[toNode].edges.includes(fromNode.id)) return true;
  else return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode.id);
  this.nodes[toNode].edges.push(fromNode.id);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.splice(this.nodes[fromNode].edges.indexOf(toNode.id), 1);
  this.nodes[toNode].edges.splice(this.nodes[toNode].edges.indexOf(fromNode.id), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


