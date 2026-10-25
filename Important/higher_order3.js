
let arr=[10,5,100,30,6,2];

let asc=arr.sort((a,b)=>{return a-b});
console.log(asc); // Output: [2, 5, 6, 10, 30, 100]

let arr1=[10,5,18,30,true,"100"];
let desc=arr1.sort((a,b)=>{return b-a});
console.log(desc); // Output: [100, 30, 18, 10, 5, 2]

//some method acts as logical OR(||) operator. It returns true if any of the element satisfies the condition.
console.log("Some method");

let ar=[1,2,3,4,5];

let val = ar.some((a,index,array)=>{
  return a%2==0;
})

console.log(val); // Output: true

//every method acts as logical AND(&&) operator. It returns true if all of the element satisfies the condition.
console.log("Every method");

let ar1=[1,2,3,4,5];

let val1 = ar1.every((a,index,array)=>{
  return a%2==0;
})

console.log(val1); // Output: false