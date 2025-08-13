// 1 =>  WAP for Circular Linklist Operation (Insert, delete, display).

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class circularList {
//   constructor() {
//     this.head = null;
//     this.end = null;
//   }

//   apddendData(val) {
//     let temp = new Node(val);
//     if (this.head == null) {
//       this.head = temp;
//       this.end = temp;
//       this.end.next = this.head;
//     } else {
//       this.end.next = temp;
//       temp.next = this.head;
//       this.end = temp;
//     }
//   }

//   deleteData() {
//     let currnt = this.head;
//     let previus = null;

//     if (this.head == this.end) {
//       this.head = null;
//       this.end = null;
//     } else {
//       while (currnt !== this.end) {
//         previus = currnt;
//         currnt = currnt.next;
//       }

//       previus.next = this.head;
//       this.end = previus;
//     }
//   }

//   displayData() {
//     let currnt = this.head;
//     if (this.head == null) {
//       console.log("List Empty");
//       return;
//     }

//     do {
//       console.log(currnt.data);
//       currnt = currnt.next;
//     } while (currnt !== this.head);
//   }
// }

// let circular = new circularList();
// circular.apddendData(100);
// circular.apddendData(200);
// circular.apddendData(300);
// circular.apddendData(400);
// circular.apddendData(500);
// circular.deleteData();
// circular.deleteData();

// circular.displayData();

// OUTPUT

// 100
// 200
// 300

// 2 => WAP for Reverse Singly Linklist
// 3 => WAP for check linklist is palindrome or not.

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class singlyLinkList {
//   constructor() {
//     this.head = null;
//   }

//   appendData(val) {
//     let temp = new Node(val);
//     if (this.head == null) {
//       this.head = temp;
//     } else {
//       let current = this.head;
//       while (current.next != null) {
//         current = current.next;
//       }
//       current.next = temp;
//     }
//   }

//   displayData() {
//     let current = this.head;
//     let output = "";
//     while (current != null) {
//       output += current.data;
//       if (current.next !== null) {
//         output += " => ";
//       }
//       current = current.next;
//     }
//     console.log(output);
//   }

//   revrseData() {
//     let current = this.head;
//     let arr = [];
//     while (current) {
//       arr.push(current.data);
//       current = current.next;
//     }

//     this.head = null;

//     for (let i = arr.length - 1; i >= 0; i--) {
//       this.appendData(arr[i]);
//     }
//   }

//   palidrome() {
//     let arr = [];
//     let current = this.head;

//     while (current != null) {
//       arr.push(current.data);
//       current = current.next;
//     }

//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {
//       if (arr[start] != arr[end]) {
//         console.log("Not a palindrome");
//         return;
//       }
//       start++;
//       end--;
//     }

//     console.log("Palindrome");
//   }
// }

// let SinglyLinkList = new singlyLinkList();

// SinglyLinkList.appendData(100);
// SinglyLinkList.appendData(200);
// SinglyLinkList.appendData(300);
// SinglyLinkList.appendData(400);
// SinglyLinkList.appendData(500);

// SinglyLinkList.displayData();
// SinglyLinkList.palidrome();
// SinglyLinkList.revrseData();
// SinglyLinkList.displayData();

//  output
//  100 -> 200 -> 300 -> 400 -> 500
//  Not a palindrome
//  500 -> 400 -> 300 -> 200 -> 100
