class Node {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// Enqueuing or push
	// This function accepts some value
	// Create a new node using that value passed to the function
	// If there are no nodes in the queue, set this node to be the first and last property of the queue
	enqueue(val) {
		const newNode = new Node(val);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}

	// Dequeueing or shifting
	// If there is no first property, just return null
	// Store the first property in a variable
	// See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
	// If there is more than 1 node, set the first property to be the next property of first
	// Decrement the size by 1
	// Return the value of the node dequeued
	dequeue() {
		if (!this.first) return null;

		const temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;

		this.size--;
		return temp.value;
	}
}

const q = new Queue();
