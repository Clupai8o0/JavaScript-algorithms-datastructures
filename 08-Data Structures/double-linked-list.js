class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //* Pushing
  // Adding new node to the end of the doubly linked list
  // -> Create a new node with a value passed to func
  // -> If the head prop is null set the head and tail to be the newly created node
  // -> If not, set the next property on the tail to be that node
  // -> Set the prev prop on the newly created node to be the tail
  // -> Set tail to be newly created node
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //* Pop
  // Removing a node from the end of the Doubly Linked List
  // -> If there is no head/tail, return undefined
  // -> Store current tail in a var to return later
  // -> If length is 1, set head and tail to be null
  // -> Update the tail to be the previous Node
  // -> Set the newTail's next to null 
  // -> Decrement the length
  // -> Return the removed tail
  pop() {
    if (!this.head) return undefined;

    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }

    this.length--;
    return poppedNode;
  }
}

const list = new DoublyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.pop())