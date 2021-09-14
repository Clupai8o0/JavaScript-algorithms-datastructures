### Alogirthm: 
A process to accomplish a task

## How do you improve?
- **Devise** a plan for solving
- **Master** common solving patterns

## Problem solving
- [x] Understand
- [x] Explore
- [x] Break it down
- [x] Simplify
- [x] Look back and refactor

# Understand Problems
1. Restate problems in your own words
2. What are the inputs?
3. What are the outputs, what should be outputted?
4. Can the outputs be determined form the inputs? Do you have enough information to solve this problem?
5. How should I label important pieces of data that are part of a problem?

### Example:
- Write a function that adds two numbers
- a and b are inputs 
- Output should be the sum 
- Yes, just add the numbers
```ts
function add(a: number, b: number): number { 
  return a + b; 
}
```

# Explore
- Come up with examples so you could understand the problem better
- Start simple, then go complex
- Explore examples with empty values
- Explore examples with invalid values

### Example
```js
charCount("aaa"); // { a: 4 }
charCount("hello from the other side"); 
charCount();
charCount(null);
```

# Break it down
- Communicating your steps
- Writing out the steps you need to take

### Example
```js
function charCount(str) {
  // make object to return
  // loop over string
  // lowercase the string
    // if char is a key in object then add to count
    // if the char is not in key then add it to the one that exists
    // if char is sapce period don't do anything
  // return obj
}
```

# Solve / Simplify
It's better to start doing something then just staying their with a blank head

## Simplify
- Find the core difficulty
- Temporarily ignore the difficulty
- Write simplified solution
- The incorporate the difficulty back in

# Look back and refactor
Improving the code, reflecting on written code.

### Questions
- Can you check the result? Does code work
- Can you derive the result differently?
- Do you understand it in a glance?
- Can you use it elsewhere? 
- Can you improve the performance?
- Can you think other ways to refactor?
- How have other's solved this problem?