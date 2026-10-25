
//Reduce method is used to reduce the array to a single value by applying a function to each element of the array.

let arr = [1, 2, 3, 4, 5];

let total= arr.reduce((acc,val,index,array)=>{return acc+val},0);
console.log(total); // Output: 15

let emp=[
  {name:"sachin", salary:10000},
  {name:"rahul", salary:20000},
  {name:"rohit", salary:30000},
  {name:"virat", salary:40000},
];

let cal = emp.reduce((acc,val,index,array)=>{return acc + val.salary},0);
console.log(cal); // Output: 100000