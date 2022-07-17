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
		this.tail.next = null;
		this.length -= 1;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	//* Shifting
	// If there are no nodes, return undefined
	// Store current head property in variable
	// Set head to be current head's next property
	// Decrement length by 1
	// Return the value of node removed
	/**
	 * Removes a new node from the beginning of the Linked List
	 * @returns {Node} the node that was removed
	 */
	shift() {
		if (!this.head) {
			return undefined;
		}

		const current = this.head;
		this.head = current.next;

		this.length -= 1;
		if (this.length === 0) {
			this.tail = null;
		}

		return current;
	}

	//* Unshift
	// function should accept a Value
	// Create a new node using the value passed into the function
	// If there is no head property, set the head and tail to be the node
	// Otherwise set the new code next property to the current head
	// Set the head property to be the new node
	// Increment length by 1
	// Return linked list
	/**
	 * Adding a new node to the beginning of the Linked List
	 * @param {any} val - Value to be added into list
	 * @returns {SinglyLinkedList}
	 */
	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length += 1;
		return this;
	}

	//* Get
	// Should accept index
	// If its negative or greater than length, then return null
	// Loop through list, until you reach index and return the node at that index
	/**
	 * Retrieves an node by its position in the linked list
	 * @param {int} index position
	 * @returns {Node}
	 */
	get(index = 0) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		let current = this.head;
		let counter = 0;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	//* Set
	// Should accept a value and an index
	// Use get function to find specific node
	// if node not found, return false
	// if node is found, set the value of that node and return true
	/**
	 * Changing the value of a node based on its position in the list
	 * @param {int} index position of the node
	 * @param {any} val value of the updated node
	 * @returns {bool} success
	 */
	set(index = 0, val) {
		const node = this.get(index);
		if (!node) return false;

		node.val = val;
		return true;
	}

	//* Insert
	// If index is less than zero, or greater than length, return false
	// if index is same as length, push a new node the the end of the list
	// if index is 0, unshift a new node to the start of the list
	// otherwise, using get method, access te node at the index - 1
	// set the next property on that node to the new node
	// and set the next for the new node to the previous next
	// increment length
	// return true
	/**
	 * Adding a node toe the linked list at a specific position
	 * @param {int} index position to insert value
	 * @param {any} val value to be inserted
	 * @returns {bool} success
	 */
	insert(index = 0, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) {
			this.push(val);
			return true;
		}
		if (index === 0) {
			this.unshift(val);
			return true;
		}

		const newNode = new Node(val);
		const prevNode = this.get(index - 1);
		newNode.next = prevNode.next;
		prevNode.next = newNode;

		this.length++;
		return true;
	}

	//* Remove
	// if index is less than 0 or greater than length, return null
	// if index is same as length - 1, pop
	// if index is 0, shift
	// otherwise, use get to access node at index-1
	// set the next property on that node to the next node of the next node
	// decrement length
	// return value of the removed node
	/**
	 * Removing a node from a specific position in the list
	 * @param {int} index position of node to remove
	 * @return {bool}
	 */
	remove(index = 0) {
		if (index < 0 || index >= this.length) return null;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		const prevNode = this.get(index - 1);
		const removedNode = prevNode.next;
		prevNode.next = removedNode.next;

    this.length--;
		return removedNode;
	}

  //* Reverse
  // Swap head and tail
  // Create variable next
  // Create variable prev
  // Create variable node and initialize it to head property
  // Loop through list
  // Set next property to be next property on whatever node is
  // Set next property on the node to be whatever prev is
  // Set prev to be value of the node variable
  // Set node variable to be value of next variable
  /**
   * Reversing the linked list
   */
  reverse() {
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let next = null, prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    const arr = []
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("Man");
console.log(list.push("You suck"));
console.log(list.pop());
console.log(list.shift());
console.log(list.unshift("Yo"));
console.log(list.get(2));
console.log(list.set(1, "Bruh"));
console.log(list.insert(2, "You good?"));
console.log(list.get(2));
console.log(list.remove(2))
console.log(list);

list.print();
list.reverse()
list.print()
