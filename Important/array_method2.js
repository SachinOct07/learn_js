
//concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[7,8,9];
//different ways to merge arrays using concat method
let mergedArr=arr1.concat(arr2,arr3);
let ar1= arr1.concat(10,20,30);
let ar2= arr2.concat();
let ar3= [].concat(arr3);
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("Slice Method");
//slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let arr4=[1,2,3,4,5];
let slicedArr1=arr4.slice(2);
console.log(slicedArr1); // Output: [3, 4, 5]
let slicedArr=arr4.slice(1,4);
console.log(slicedArr); // Output: [2, 3, 4]

console.log("Flat Method");
//flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let arr5=[1,2,[3,4,[5,6]]];
let flatArr=arr5.flat(2);// here the 2 represents the depth level specifying how deep a nested array structure should be flattened. The default is 1.
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]
//note: If we don't know the depth of the nested array, we can use Infinity as the depth level to flatten the array completely.
let flatArr2=arr5.flat(Infinity);
console.log(flatArr2); // Output: [1, 2, 3, 4, 5, 6]

console.log("Fill Method");
//fill method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
let arr6=[1,2,3,4,5];
arr6.fill(0,2,4);
console.log(arr6); // Output: [1, 2, 0, 0, 5]

//Note: the concat method, slice method and flat method do not change the original array, but instead return a new array. The fill method, on the other hand, modifies the original array in place.