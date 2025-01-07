# Dijkstra's Algorithm

Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.

## Weighted Graph

- A graph in which each edge is assigned a numerical value
- These values are called weights

## Dijkstra's Algorithm

- The algorithm works by selecting the vertex that is closest to the source vertex
- It then moves to the next vertex and repeats the process
- The algorithm continues until it has reached the end vertex

### Steps

1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
2. Once we've moved to the node we're going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node

## Priority Queue

- A data structure where each element has a priority
- Elements with higher priorities are served before elements with lower priorities

## Dijkstra's Pseudocode

- This function should accept a starting and ending vertex
- Create an object (we'll call it `distances`) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
- After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
- Create another object called `previous` and set each key to be every vertex in the adjacency list with a value of null
- Start looping as long as there is anything in the priority queue
  - Dequeue a vertex from the priority queue
  - If that vertex is the same as the ending vertex - we are done!
  - Otherwise loop through each value in the adjacency list at that vertex
    - Calculate the distance to that vertex from the starting vertex
    - If the distance is less than what is currently stored in our distances object
    - Update the distances object with new lower distance
    - Update the previous object to contain that vertex
    - Enqueue the vertex with the total distance from the start node