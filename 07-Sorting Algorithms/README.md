# What is Sorting?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

# Built in JavaScript Sort Method

```js
Array.sort();
```

It works on the basis of the unicode. Each element in the array is converted into and string and then compared. This is quite problematic for numbers.
<br/>

## Telling it how to sort

- The sort method accepts an optional comparator function.
- The comparator function tells javascript how to sort.
- The comparator looks at pairs of elements (a & b), and determines their sort order based on the return value
  - If it returns negative, a comes before b.
  - If it returns positive, a comes after b.
  - If it returns 0, a nad b are the same.

## Example

### Sorting by Number

```js
function numCmp(num1, num2) {
	return num1 - num2;
}

[6, 4, 15, 10].sort(numCmp);

// -> [4, 6, 10, 15]
```

### Sorting by Length

```js
function compareByLen(str1, str2) {
	return str1.length - str2.length;
}

["ab", "abcd", "a", "abcde"].sort(compareByLen);
```
