class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
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
			poppedNode.prev = null;
		}

		this.length--;
		return poppedNode;
	}

	//* Shift
	// Removing a node from the beginning of the list
	// -> If length is 0, return undefined
	// -> Store the current head in a var
	// -> If length is one
	// -> -> set the head to be null
	// -> -> set the tail to be null
	// -> Update the head to be the next of the old head
	// -> Set the prev head property to null
	// -> Set the old head's next to null
	// -> Decrement the length
	// -> Return old head
	shift() {
		if (this.length === 0) return undefined;

		const oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;
		return oldHead;
	}

	//* UnShift
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

	//* Get
	// Accessing a node by its position
	// ->
}

const list = new DoublyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
// console.log(list.pop());
console.log(list.shift());
console.log(list.unshift(1));
