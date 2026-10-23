
let color = ['red', 'green', 'blue'];//array

console.log(color);
console.log(color[0]);
console.log(color[1]);
console.log(color[color.length - 1]);

//An array is a data structure used to store multiple values in a single variable.
//It can hold various data types or different data types.
//In JavaScript, arrays are dynamic, meaning they can grow and shrink in size as needed.
//It can hold homogeneous(same) or heterogeneous[different] data types, including numbers, strings, objects, and even other arrays.


//defining an array by using array constructor.
let newArray = new Array();

newArray[0]="hi";
newArray[1]="bye";
newArray[2]="sry";

console.log(newArray);

//dense array is an array in which all the elements are defined and there are no empty slots. In a dense array, every index from 0 to the length of the array - 1 has a value assigned to it.
let denseArray = [1, 2, 3, 4, 5];
console.log(denseArray);

//sparse array is an array in which some elements are undefined or missing. In a sparse array, there are empty slots or gaps between the defined elements. Sparse arrays can be created by leaving some indices undefined or by using the delete operator to remove elements from an array.
//to handle the sparse array hash table is used. In a sparse array, the indices of the defined elements are stored in a hash table, allowing for efficient access to the defined elements while ignoring the empty slots.
let sparseArray = [1, 2, , 4,, 6];
console.log(sparseArray);