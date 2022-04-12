# JavaScript built in search functions

## Some array

```ts
const usernames = ["a", "b", "c", "d"];
```

## indexOf
```ts
usernames.indexOf("c");
usernames.includes("c");
usernames.find("c");
usernames.findIndex("c");
```

# Algorithms

## Linear Search

Checking all elements one at a time until the element matches the parameter. *Doesn't need to be sorted*

## Binary Search

Works by eliminating half of all elements and looking through the other half. Based on divide and conquer. *Note: Data is expected to be sorted*

## Naive String Search

**Searching for substring in a larger string. (Patterns to be exact)** Eg: Counting the number of times a smaller string appears in a longer string. wowzwomgzomg, finding the pattern 'omg' in this.