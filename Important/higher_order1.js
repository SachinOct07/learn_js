
let fruits = ["Banana", "Orange", "Apple", "Mango"];

//forEach method calls a provided function once for each element in an array, in order. It does not change the original array, but instead returns undefined.
fruits.forEach(sample);
//forEach cannot return a value, it always returns undefined. It is used to execute a function on each element of the array, but it does not create a new array or modify the original array.
function sample(a,index,array){
  console.log(a,index,array);
}

//map method can be used to create a new array by performing a function on each element of the original array. It does not change the original array, but instead returns a new array.
console.log("Using map method");
fruits.map(function(a,index,array){
  console.log(a,index,array);
});


let arr=fruits.map((val,index)=>{
  return {id:index,name:val};
})
console.log(arr); // Output: ["Banana", "Orange", "Apple", "Mango"]

//modifying the original array using forEach method
fruits.forEach((val,index)=>{
  fruits[index] = val.toUpperCase();
});
console.log(fruits); // Output: ["BANANA", "ORANGE", "APPLE", "MANGO"]

//Chaining methods: we can chain multiple array methods together to perform complex operations on an array.
// For example, we can use the map method to create a new array of objects, and then use the filter method to filter out certain elements from that array.
console.log("Chaining methods");

let arr2= fruits.map(val=> val.toUpperCase()).sort().fill("12",1,2);
console.log(arr2);
//note: we cannot use chain methods on forEach method, because it does not return a new array. It always returns undefined. We can only use chain methods on methods that return a new array, such as map, filter, sort, etc.
console.log(fruits);

//condition based statement
let arr3= fruits.map((val)=> {return val== "APPLE"});
console.log(arr3);

let arr4= fruits.forEach((val)=> console.log(val== "APPLE"));
console.log(arr4);