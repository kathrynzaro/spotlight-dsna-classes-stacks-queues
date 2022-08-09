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
}

class Queue {}

module.exports = { Stack, Queue };
