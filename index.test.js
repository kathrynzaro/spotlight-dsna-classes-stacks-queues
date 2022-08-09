const { Stack } = require("./index.js");
const { Queue } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  it("#pop should remove an item from the stack ", () => {
    const stack = new Stack();
    stack.pop(1);
    expect(stack.peek()).toEqual(undefined);
  });
  
  it("#enqueue should add an element to the queue ", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });
  it('#dequeue should remove an element to the queue ', () => {
    const queue = new Queue();
    queue.dequeue(1);
    expect(queue.dequeue()).toEqual(undefined);
  });
  // add more tests here...
});
