class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  
  size(){
    return this.count;
  }
  enqueue(value){
    if(this.count === 0) this.storage[this.count] = value;
    
    let temp = {};
    for(let item in this.storage){
      temp[parseInt(item) + 1] = this.storage[item];
    }
    temp[0] = value;
    this.storage = temp;
    this.count++;
  }
  
  dequeue(){
    if(this.count > 0) this.count--;
    let removed = this.storage[this.count];
    delete this.storage[this.count];
    return removed;
  }

}
