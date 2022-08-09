const { Stack } = require("./index.js");
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
  // add more tests here...
});
