
//basic array methods

let arr=[1,2,3,4,5];

//push method adds one or more elements to the end of an array and returns the new length of the array.
let a=arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
console.log(a); // Output: 6

//pop method removes the last element from an array and returns that element. This method changes the length of the array.
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

//shift method removes the first element from an array and returns that removed element. This method changes the length of the array.
arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

//unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(0);
console.log(arr); // Output: [0, 2, 3, 4, 5]