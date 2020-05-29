var Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds a value to the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the last value of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // Returns the last value of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);

console.log("1, Peek: ", myStack.peek());
console.log("2, Pop: ", myStack.pop());
console.log("3, Pop: ", myStack.pop());
myStack.push("Sebastian");
console.log("4, Push: Sebastian\n5, Size", myStack.size());
console.log("6, Pop: ", myStack.pop());
console.log("7, Size", myStack.size());
