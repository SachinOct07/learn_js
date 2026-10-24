
//indexof() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let arr11=[1,2,3,4,5];
console.log(arr11.indexOf(3)); // Output: 2
console.log(arr11.indexOf(6)); // Output: -1
let a= arr11.indexOf(3,3); // here the second parameter is the index to start the search from. In this case, it starts searching from index 3.
console.log(a); // Output: -1
//indexof() searches the array from left to right, and returns the index of the first occurrence of the specified element. If the element is not found, it returns -1. The second parameter is optional and specifies the index to start the search from. If it is not provided, the search starts from index 0.

console.log("LastIndexOf Method");
//lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
let arr12=[1,2,3,4,5,3];
console.log(arr12.lastIndexOf(3)); // Output: 5
console.log(arr12.lastIndexOf(6)); // Output: -1
console.log(arr12.lastIndexOf(3,4)); // Output: 2
// The array is searches from right to left.