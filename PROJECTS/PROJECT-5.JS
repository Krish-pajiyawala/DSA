// 1 => Write a program for Circular Queue.

// class circulerQueue {
//   constructor(size) {
//     this.queue = new Array(size);
//     this.i = -1;
//     this.start = -1;
//   }

//   insert(value) {
//     if (this.i === -1 && this.start == -1) {
//       this.i = this.start = 0;
//       this.queue[this.i] = value;
//     } else if ((this.i + 1) % this.queue.length == this.start) {
//       console.log("queue is overflow");
//     } else {
//       this.i = (this.i + 1) % this.queue.length;
//       this.queue[this.i] = value;
//     }
//   }

//   delete() {
//     if (this.i == -1 && this.start == -1) {
//       console.log("queue is empty");
//     } else if (this.i == this.start) {
//       this.i = this.start = -1;
//     } else {
//       this.start = (this.start + 1) % this.queue.length;
//     }
//   }

//   display() {
//     let index = this.start;
//     if (this.i == -1 && this.start == -1) {
//       console.log("Queue is empty");
//     } else {
//       while (index != this.i) {
//         console.log(this.queue[index]);
//         index = (index + 1) % this.queue.length;
//       }
//       console.log(this.queue[this.i]);
//     }
//   }
// }

// let queue = new circulerQueue(3);

// queue.insert(10);
// queue.insert(20);
// queue.insert(30);

// queue.delete();

// queue.insert(40);
// queue.insert(50);

// queue.display();



    // OUYPUT

    // queue is overflow
    // 20
    // 30
    // 40

// 2 => write a program Queue using two stacks.

// class Queue {
//   constructor() {
//     this.s1 = [];
//     this.s2 = [];
//   }

//   add(ele) {
//     this.s1.push(ele);
//   }

//   remove() {
//     while (this.s1.length > 1) {
//       this.s2.push(this.s1.shift());
//     }
//     [this.s2, this.s1] = [this.s1, this.s2];
//     this.s2.shift();
//   }
// }

// let Que = new Queue();

// Que.add(1);
// Que.add(2);
// Que.add(3);

// console.log(Que);

// Que.remove();

// console.log(Que);


    // OUTPUT

    // Queue { s1: [ 1, 2, 3 ], s2: [] }
    // Queue { s1: [ 1, 2 ], s2: [] }

// 3 => write a program check first string swap can make strings equal.

// let stringEqual = (s1, s2) => {
//   if (s1.length !== s2.length) {
//     return false;
//   }

//   let arr = [];

//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       arr.push(i);
//     }
//     if (arr.length > 2) {
//       return false;
//     }
//   }
//   if (arr.length === 0) {
//     return true;
//   }
//   if (arr.length !== 2) {
//     return false;
//   }

//   let [i, j] = arr;
//   return s1[i] === s2[j] && s1[j] === s2[i];
// };

// console.log(stringEqual("krish","krihs"))


    // output

    // true
