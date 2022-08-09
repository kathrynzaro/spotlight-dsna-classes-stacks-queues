class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  pop(item) {
    this.items.pop();
  }
}

class Queue {
  
  constructor() {
  this.element = {};
  this.head = 0;
  this.tail = 0;  
}
enqueue(element) {
  this.element[this.tail] = element;
  this.tail++;
}
dequeue() {
  const item = this.element[this.head];
  delete this.element[this.head];
  this.head++;
  return item;
}
}

module.exports = { Stack, Queue };
