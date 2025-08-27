// 1 => Write a program for Stack Operation Program (Insert, Delete, isEmpty, Length).

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Empty";
    }

    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  length() {
    return this.items.length;
  }
  printStack() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.join(" ");
  }
}
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack elements:", stack.printStack());

    // Output: Stack elements: 10 20 30

console.log(stack.isEmpty());

    // Output: false

console.log("Stack length:", stack.length());

    // Output: Stack length: 3

console.log("Deleted element:", stack.pop());

    // Output: Deleted element: 30

console.log("Stack after pop:", stack.printStack());

    // Output: Stack after pop: 10 20z

// 2 => Write a program for Next Greater Element using Stack.

// function nextGreaterElements(arr) {
//   let n = arr.length;
//   let result = new Array(n).fill(-1);
//   let stack = [];

//   for (let i = n - 1; i >= 0; i--) {
//     while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//       stack.pop();
//     }

//     if (stack.length > 0) {
//       result[i] = stack[stack.length - 1];
//     }

//     stack.push(arr[i]);
//   }

//   return result;
// }

// console.log(nextGreaterElements([5, 10, 15, 35, 25, 100, 75 ]));

    // OUTPUT

    // [10, 15, 35, 100, 100, -1, -1]

// 3 => Write a program for a reverse string using Stack.

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString("HACRRR..."));

    // Output

    // ...RRRCAH
