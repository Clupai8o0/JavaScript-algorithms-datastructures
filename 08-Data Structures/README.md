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

| Insertion | Removal      | Searching | Access |
| --------- | ------------ | --------- | ------ |
| O(1)      | O(1) or O(n) | O(n)      | O(n)   |
