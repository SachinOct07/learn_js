
console.log("Sort Method");
//sort method is used to sort the elements of an array in place and returns the sorted array. The default sort order is according to string Unicode code units.
let arr7=[3,1,4,1,51,9,2,6];
arr7.sort();//the sort method converts the elements into strings and compares their sequences of UTF-16 code units values. So, the result may not be what you expect for numbers.
console.log(arr7); // Output: [1, 1, 2, 3, 4, 5, 6, 9]

console.log("Reverse Method");
//reverse method reverses the order of the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.
let arr8=[1,2,3,4,5];
arr8.reverse();
console.log(arr8); // Output: [5, 4, 3, 2, 1]
console.log(arr8.includes(3)); // Output: true
//includes method checks whether the array contains a certain element, returning true or false as appropriate. It uses the sameValueZero algorithm for comparison, which is similar to the strict equality operator (===), but treats NaN as equal to NaN.


//join method joins all elements of an array into a string and returns this string. The elements are separated by a specified separator string. If no separator is provided, the default separator is a comma.
let arr9=[1,2,3,4,5];
let joinedArr=arr9.join("-");
console.log(joinedArr); // Output: "1-2-3-4-5"

//toString method returns a string representing the specified array and its elements. It is similar to the join method, but it does not allow you to specify a separator.
let arr10=[1,2,3,4,5];
let str=arr10.toString();
console.log(str); // Output: "1,2,3,4,5"