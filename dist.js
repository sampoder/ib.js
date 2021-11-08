class Stack {
  constructor() {
    this.value = [];
  }
  push(item) {
    this.value.unshift(item)
  }
  pop() {
    return this.value.shift();
  }
  isEmpty() {
    return this.value.length == 0 ? true : false;
  }
}

exports.Stack = Stack

class Queue {
  constructor() {
    this.value = [];
  }
  enqueue(item) {
    return this.value.push(item);
  }
  dequeue() {
    return this.value.shift();
  }
  isEmpty() {
    return this.value.length == 0 ? true : false;
  }
}

exports.Queue = Queue

class Collection {
  constructor() {
    this.value = [];
    this.currentLocation = 0;
  }
  resetNext() {
    this.currentLocation = 0;
  }
  addItem(item) {
    return this.value.push(item);
  }
  getNext() {
    let returnValue = this.value[this.currentLocation];
    this.currentLocation += 1;
    return returnValue
  }
  hasNext(){
    return typeof this.value[this.currentLocation] == "undefined" ? false : true;
  }
  isEmpty() {
    return this.value.length == 0 ? true : false;
  }
}

exports.Collection = Collection