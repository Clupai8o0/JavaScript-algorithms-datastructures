class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//* Basically how Node works
// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

  //* Pushing
	// Function should accept a value
	// Create a new node using the value passed into the function
	// If there is no head property on the list, set th head and tail to be the newly created node
	// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
	// increment length by one
	/**
   * Push a new item into the list
   * @param {*} val Value to be added to the List
   * @returns this
   */
	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length += 1;
		return this;
	}

  //* Popping
  // If there are no nodes in the list, return undefined
  // Loop through the list until you reach the tail
  // Set the next property of the 2nd to last node to be null
  // Set the tail to be the 2nd to last node
  // Decrement the length of the list by 1
  // Return the value of the node removed
  /**
   * Gets rid of the last property
   * @returns {Node} the node that was removed
   */
  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null
    this.length -= 1;

    return current
  }
}

const list = new SinglyLinkedList();
list.push("Hello")
list.push("Goodbye")
list.push("Man")
console.log(list.push("You suck"));
console.log(list.pop())
