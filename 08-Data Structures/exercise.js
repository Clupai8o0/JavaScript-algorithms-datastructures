class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(val) {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Adding new node to the end of the doubly linked list
	// -> Create a new node with a value passed to func
	// -> If the head prop is null set the head and tail to be the newly created node
	// -> If not, set the next property on the tail to be that node
	// -> Set the prev prop on the newly created node to be the tail
	// -> Set tail to be newly created node
	push(val) {
		const newNode = new Node(val);

		// no element
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

	// Adding a node to the beginning
	// -> Create new node with the value passed
	// -> If len is 0
	// -> -> Set the head to be new node
	// -> -> Set the tail to be new node
	// -> Else
	// -> -> Set prev property on head to be new node
	// -> -> Set next property on new node to be head
	// -> -> Update head to be new node
	// -> Increment length
	// -> Return list
	unshift(val) {
		const newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	shift() {
		if (this.length === 0) return undefined;

		const oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;
		return oldHead;
	}

	// Accessing a node by its position
	// -> If index is less than 0 or greater or equal to the length, return null
	// -> If index is less than or equal to half the length of the list
	// -> -> Loop through list starting from head towards the middle
	// -> -> Return the node once found
	// -> If index is greater than half the length of the list
	// -> -> Loop through the list starting from tail towards the middle
	// -> -> Return the node once found
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let count, current;
		if (index <= Math.floor(this.length / 2)) {
			count = 0;
			current = this.head;

			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;

			while (count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	// Replacing the value of a node
	// -> Create a variable which is the result of the get method at the index passed
	// -> -> If the get method returns a valid node, set value of that node to be the value passed
	// -> -> Return true
	// -> Otherwise return false
	set(index, value) {
		const foundNode = this.get(index);
		if (foundNode !== null) {
			foundNode.val = value;
			return true;
		} else return false;
	}

	// Removing a node from the end of the Doubly Linked List
	// -> If there is no head/tail, return undefined
	// -> Store current tail in a var to return later
	// -> If length is 1, set head and tail to be null
	// -> Update the tail to be the previous Node
	// -> Set the newTail's next to null
	// -> Decrement the length
	// -> Return the removed tail
	pop() {
		if (this.length === 0) return undefined;

		const oldTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}

		this.length--;
		return oldTail;
	}

	// Removing a node by position
	// -> If index is less than 0 or greater than or equal to the length, return undefined
	// -> If index is 0, shift
	// -> If index is same as length-1, pop
	// -> Use get method to retrieve the item to be removed
	// -> Update the next and prev properties to remove the found node from list
	// -> Set next and prev to null on the found node
	// -> Decrement the length
	// -> Return the removed node
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const removedNode = this.get(index);
		removedNode.prev.next = removedNode.next;
		removedNode.next.prev = removedNode.prev;

		removedNode.prev = null;
		removedNode.next = null;

		this.length--;
		return removedNode;
	}

	// Adding a node to a certain position
	// -> If index is less than zero or greater than equal to length, return false
	// -> If index is 0, unshift
	// -> If index is same as length, push
	// -> Use get method to access index - 1
	// -> Set the next and prev properties on correct nodes to link everything together
	// -> Increment the length
	// -> Return true
	insert(index, value) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return !!this.unshift(value);
		if (index === this.length - 1) return !!this.push(value);

		const newNode = new Node(value);
		const prevNode = this.get(index - 1);
		const nextNode = prevNode.next;

		prevNode.next = newNode;
		nextNode.prev = newNode;

		this.length++;
		return true;
	}
}
