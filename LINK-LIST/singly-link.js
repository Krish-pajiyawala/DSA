// Types of link list

// 1 => Singly Linked List
// 2 => Doubly Linked List
// 3 => Circular Linked List
// 4 => SLL with Sentinel Node
// 5 => DLL with Sentinel Node
// 6 => CLL with Sentinel Node
// 7 => SLL with Sentinel Node and Tail Pointer
// 8 => DLL with Sentinel Node and Tail Pointer

/* 1 => Singly Linked List */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class singlyLinkList {
  constructor() {
    this.head = null;
  }
  appendData(val) {
    let temp = new Node(val);
    if (this.head == null) {
      this.head = temp;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = temp;
    }
  }
  removeData() {
    if (this.head == null) {
      console.log("kuch Nhi he Abhi");
    } else if (this.head.next == null) {
      this.head = null;
    } else {
      let current = this.head;
      let prev = null;
      while (current.next != null) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
    }
  }

  palidrome() {
    let arr = [];
    let current = this.head;

    while (current != null) {
      arr.push(current.data);
      current = current.next;
    }

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(arr.length / 2);

    while (start < end) {
      if (arr[start] != arr[end]) {
        console.log("Not a palindrome");
        return;
      }
      start++;
      end--;
    }

    console.log("Palindrome");
  }

  displayData() {
    if (this.head == null) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let data = "";
      while (current) {
        data += current.data + " => ";
        current = current.next;
      }
      console.log(data);
    }
  }
}

let SinglyLinkList = new singlyLinkList();

SinglyLinkList.appendData(100);
SinglyLinkList.appendData(200);
SinglyLinkList.appendData(300);
SinglyLinkList.appendData(200);
SinglyLinkList.appendData(100);

SinglyLinkList.displayData();

// SinglyLinkList.removeData();
// SinglyLinkList.removeData();
// SinglyLinkList.removeData();
// SinglyLinkList.removeData();
// SinglyLinkList.removeData();
// SinglyLinkList.removeData();
// SinglyLinkList.removeData();

// SinglyLinkList.displayData();
SinglyLinkList.palidrome();
