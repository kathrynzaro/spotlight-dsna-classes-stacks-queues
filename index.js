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
  #list;

  constructor(list) {
    this.#list = list || [];
  }
  
  enqueue(item) {
    this.#list.push(item);
  }
  
  get count() {
    return this.#list.length;
  }
  
  get next() {
    return this.#list[0];
  }

  

}

module.exports = { Stack, Queue };
