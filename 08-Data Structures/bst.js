class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Create a new node
  // Starting at the root
  // -> Check if there is a root, if not - the root now becomes that new node!
  // -> If there is a root, check if the value of the new node is greater than or less than the value of the root
  // -> If it is greater
  // -> -> Check to see if there is a node to the right
  // -> -> -> If there is, move to that node and repeat these steps
  // -> -> -> If there is not, add that node as the right property
  // -> If it is less
  // -> -> Check to see if there is a node to the left
  // -> -> -> If there is, move to that node and repeat these steps
  // -> -> -> If there is not, add that node as the left property
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Starting at the root
  // -> Check if there is a root, if not - we're done searching!
  // -> If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  // -> If not, check to see if the value is greater than or less than the value of the root
  // -> If it is greater
  // -> -> Check to see if there is a node to the right
  // -> -> -> If there is, move to that node and repeat these steps
  // -> -> -> If there is not, we're done searching!
  // -> If it is less
  // -> -> Check to see if there is a node to the left
  // -> -> -> If there is, move to that node and repeat these steps
  // -> -> -> If there is not, we're done searching!
  find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return false;
    return current;
  }

  bfs() {
    const data = [];
    const queue = [];

    queue.push(this.root);
    while (queue.length) {
      const node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  dfsPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  dfsInOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(12);
tree.insert(15);
tree.insert(18);
console.log(tree);
console.log(tree.bfs())
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInOrder())