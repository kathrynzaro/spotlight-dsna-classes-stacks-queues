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

class Queue {}

module.exports = { Stack, Queue };
