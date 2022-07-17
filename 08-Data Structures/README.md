# Data Structures

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

# Linked List

A data structure that contains a head, tail and length property. Linked Lists consist of nodes, and each node has a value and a pointer to another node or null. [Visualization of Linked Lists](https://visualgo.net/en/list)

## Comparison with Arrays

### Lists

- Do not have indexes
- Connected via nodes with a next pointer
- Random access is not allowed

### Arrays

- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

## Single Linked List

A single linked list as an alternate to arrays when insertion and deletion at the beginning are frequently required. They are connected by a single link

```js
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

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

	set(index = 0, val) {
		const node = this.get(index);
		if (!node) return false;

		node.val = val;
		return true;
	}

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

	reverse() {
		let node = this.head;

		this.head = this.tail;
		this.tail = node;

		let next = null,
			prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		return this;
	}

	print() {
		const arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}
```

| Insertion | Removal      | Searching | Access |
| --------- | ------------ | --------- | ------ |
| O(1)      | O(1) or O(n) | O(n)      | O(n)   |
