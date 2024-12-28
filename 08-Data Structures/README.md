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

## Doubly Linked List

It is almost identical to singly linked lists, except every node has another pointer, to the previous node.

# Stacks

Abstract data structure. A collection of data that follows LIFO (Last In First Out) where the last element is added to the stack will be the first element removed from the stack.

- Used to manage function invocation
- Used for Undo / Redo
- Used for routing (history object)

# Queues

Similar to Stack, but it follows FIFO (First In First Out). The first piece of data in a queue is the first one out.

- Used in background tasks
- Uploading resources
- Printing / Task processing

# Trees

A data structures that consists of nodes in a parent / child relationship that are expanding as the branches of a tree. Trees are nonlinear while lists are linear (A singly linked list can be considered a special case of tree). And a parent node can only point at the child and no other node. And there must only be one entry point (root)

- Root - The top node in a tree
- Child - A node directly connected to another node when moving away from the root
- Parent - The converse notion of a child
- Siblings - A group of nodes with the same parent
- Leaf - A node with no children
- Edge - The connection between one node and another

Uses:

- HTML DOM
- Network routing
- Abstract syntax tree
- Artificial intelligence
- Folders in operating system

## Binary Search Trees

- Every node has at most two children
- Every node to the left of the parent has value less than the parent
- Every node to the right of the parent has value greater than the parent

# Big O

| Type               | Insertion | Removal      | Searching | Access |
| ------------------ | --------- | ------------ | --------- | ------ |
| Singly Linked List | O(1)      | O(1) or O(n) | O(n)      | O(n)   |
| Doubly Linked List | O(1)      | O(1) or O(n) | O(n)      | O(n)   |
| Stack              | O(1)      | O(1)         | O(n)      | O(n)   |
| Queue              | O(1)      | O(1)         | O(n)      | O(n)   |
