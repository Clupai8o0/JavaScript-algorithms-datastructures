class Node {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	//* Push
	// Should accept a value
	// Create a new node with the value
	// If there are no nodes in the stack, set the first and last property to be the newly created node
	// If there is at least one node, create a variable that stores the current first property on the stack
	// Reset the first property to be the newly created node
	// Set the next property on the stack to be the previously created variable
	// Increment the size of the stack by 1
  // Return size
	push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //! done as unshift
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

		return ++this.size;
	}

  //* Pop
  // If there are no nodes in the stack, return null
  // Create a temporary variable to store the first property on the stack
  // If there is only 1 node, set the first and last property to be null
  // If there is more than one node, set the first property to be the next property on the current first
  // Decrement size by 1
  // Return value of node removed
  pop() {
    if (!this.first) return null;

    const removedNode = this.first;
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next;
    this.size--;
    return removedNode.value;
  }
}

const stack = new Stack();
console.log(stack.push(24))
console.log(stack.push(83))
console.log(stack)
console.log(stack.pop())