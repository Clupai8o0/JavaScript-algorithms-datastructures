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

## Tree Traversal

### 1 - Breadth First Search

- Visit every node on the same level before moving to the next level
- Create a queue and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

### 2 - Depth First Search

- PreOrder
  - Create a variable to store the values of nodes visited
  - Store the root of the BST in a variable called current
  - Write a helper function which accepts a node
    - Push the value of the node to the variable that stores the values
    - If the node has a left property, call the helper function with the left property on the node
    - If the node has a right property, call the helper function with the right property on the node
- PostOrder
  - Create a variable to store the values of nodes visited
  - Store the root of the BST in a variable called current
  - Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - If the node has a right property, call the helper function with the right property on the node
    - Push the value of the node to the variable that stores the values
- InOrder
  - Create a variable to store the values of nodes visited
  - Store the root of the BST in a variable called current
  - Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - Push the value of the node to the variable that stores the values
    - If the node has a right property, call the helper function with the right property on the node

## Which Traversal to Use?

- Breadth First Search
  - Good for finding the shortest path
- Depth First Search
  - InOrder
    - Gives you a sorted list
  - PreOrder
    - Can be used to "export" a tree structure so that it is easily reconstructed or copied
  - PostOrder
    - Used to delete or free up memory

# Binary Heaps

- Very similar to a binary search tree, but with some different rules
- In a MaxBinaryHeap, parent nodes are always larger than child nodes
- In a MinBinaryHeap, parent nodes are always smaller than child nodes

## Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- There is no order in the child nodes
- In a max binary heap the parent is always greater than the children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

Why do we need to know this? Binary Heaps are used to implement Priority Queues, which are very commonly used data structures. They are also used quite a bit with graph traversal algorithms.

<br />

What For any index of an array `n...` The left child is stored at `2n + 1` and the right child is at `2n + 2`

<br />

What if we have a child node and we want to find its parent? For any child node at index `n...` its parent is at index `(n - 1) / 2` floored

### Insert

- Push the value into the values property on the heap
- Bubble the value up to its correct spot
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index - 1) / 2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over

### ExtractMax

- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end
- Have the new root "sink down" to the correct spot
  - Your parent index starts at 0 (the root)
  - Find the index of the left child: 2 \* index + 1 (make sure it is not out of bounds)
  - Find the index of the right child: 2 \* index + 2 (make sure it is not out of bounds)
  - If the left or right child is greater than the element, swap. If both left and right children are larger, swap with the largest child
  - The child index you swapped to now becomes the new parent index
  - Keep looping and swapping until neither child is larger than the element
  - Return the old root

## Priority Queue

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

- Write a Min Binary Heap - lower number means higher priority
- Each node has a value and a priority. Use the priority to build the heap
- Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
- Dequeue method removes root element, returns it, and rearranges heap using priority

# Hash Tables

- Hash tables are used to store key-value pairs
- They are like arrays, but the keys are not ordered
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values

## Hash Functions

- A function that converts a key into an index in an array
- Hash functions need to be deterministic (same input yields same output), distribute uniformly, and be fast

### Collisions

- A collision occurs when a hash function returns the same index for two different keys
- There are many strategies for dealing with collisions, but we will focus on two: separate chaining and linear probing

#### Separate Chaining

- With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)
- This allows us to store multiple key-value pairs at the same index

#### Linear Probing

- With linear probing, when we find a collision, we search through the array to find the next empty slot
- Unlike with separate chaining, this allows us to store a single key-value at each index

## Set / Get

### Set

- Accepts a key and a value
- Hashes the key
- Stores the key-value pair in the hash table array via separate chaining

### Get

- Accepts a key
- Hashes the key
- Retrieves the key-value pair in the hash table
- If the key isn't found, returns undefined

## Keys / Values

### Keys

- Loops through the hash table array and returns an array of keys in the table

### Values

- Loops through the hash table array and returns an array of values in the table

# Graphs

A collection of nodes and connections between those nodes. A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

## Graph Terms

- Vertex - a node
- Edge - connection between nodes
- Weighted / Unweighted - values assigned to distances between vertices
- Directed / Undirected - directions assigned to distances between vertices

## Adjacency Matrix

- A two-dimensional structure that stores the connections between vertices
- Can be used to represent both directed and undirected graphs
- Can be used to represent weighted graphs

## Adjacency List

- A data structure that contains a list of vertices and a list of edges
- Can be used to represent both directed and undirected graphs
- Can be used to represent weighted graphs

## Differences and Big O

|V| = number of vertices </br>
|E| = number of edges

| Operation     | Adjacency List | Adjacency Matrix |
| ------------- | -------------- | ---------------- |
| Add Vertex    | O(1)           | O(V^2)           |
| Add Edge      | O(1)           | O(1)             |
| Remove Vertex | O(V + E)       | O(V^2)           |
| Remove Edge   | O(E)           | O(1)             |
| Query         | O(V + E)       | O(1)             |
| Storage       | O(V + E)       | O(V^2)           |

## Adjacency List vs Matrix

### Adjacency List

- Use adjacency list if your data is sparse (few connections)
- Faster to iterate over all edges with an adjacency list
- Can be slower to lookup specific edge with an adjacency list

### Adjacency Matrix

- Use adjacency matrix if your data is dense (many connections)
- Slower to iterate over all edges with an adjacency matrix
- Faster to lookup specific edge with an adjacency matrix

## Adding a Vertex

- Write a method called `addVertex`, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

## Adding an Edge

- This function should accept two vertices, we can call them `vertex1` and `vertex2`
- The function should find in the adjacency list the key of `vertex1` and push `vertex2` to the array
- The function should find in the adjacency list the key of `vertex2` and push `vertex1` to the array

## Removing an Edge

- This function should accept two vertices, we'll call them `vertex1` and `vertex2`
- The function should reassign the key of `vertex1` to be an array that does not contain `vertex2`
- The function should reassign the key of `vertex2` to be an array that does not contain `vertex1`

## Removing a Vertex

- The function should accept a vertex to remove
- The function should loop as long as there are any other vertices in the adjacency list for that vertex
- Inside of the loop, call our `removeEdge` function with the vertex we are removing and any values in the adjacency list for that vertex

# Graph Traversal

## Depth First Traversal

- The function should accept a starting node
- Create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices

### Recursive

- Create a helper function which accepts a vertex
  - The helper function should return early if the vertex is empty
  - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
  - Loop over all of the values in the adjacencyList for that vertex
  - If any of those values have not been visited, recursively invoke the helper function with that vertex

### Iterative

- The function should accept a starting node
- Create a stack to help use keep track of vertices (use a list/array)
- Create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
- Add the starting vertex to the stack, and mark it visited
- While the stack has something in it
  - Pop the next vertex from the stack
  - If that vertex hasn't been visited yet
    - Mark it as visited
    - Add it to the result list
    - Push all of its neighbors into the stack

## Breadth First Traversal

- The function should accept a starting node
- Create a queue (you can use an array) and place the starting vertex in it
- Create an array to store the nodes visited
- Create an object to store nodes visited
- Mark the starting vertex as visited
- Loop as long as there is anything in the queue
  - Remove the first vertex from the queue and push it into the array that stores nodes visited
  - Loop over each vertex in the adjacency list for the vertex you are visiting
  - If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex

# Big O

| Type               | Insertion | Removal      | Searching | Access |
| ------------------ | --------- | ------------ | --------- | ------ |
| Singly Linked List | O(1)      | O(1) or O(n) | O(n)      | O(n)   |
| Doubly Linked List | O(1)      | O(1) or O(n) | O(n)      | O(n)   |
| Stack              | O(1)      | O(1)         | O(n)      | O(n)   |
| Queue              | O(1)      | O(1)         | O(n)      | O(n)   |
| BST                | O(log n)  | O(log n)     | O(n)      | O(n)   |
| Binary Heap        | O(log n)  | O(log n)     | O(n)      | O(n)   |
| Hash Table         | O(1)      | O(1)         | O(1)      | O(1)   |
