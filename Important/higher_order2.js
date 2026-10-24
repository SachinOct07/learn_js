
let emp= [
  {name:"sachin", salary:10000},
  {name:"rahul", salary:20000},
  {name:"rohit", salary:30000},
  {name:"virat", salary:40000},
];

//In filter method, we can use chaining method.
let fdata= emp.filter((val,index)=> {
  console.log(index);
  return val.salary>20000});
console.log(fdata); // Output: [{name:"rohit", salary:30000}, {name:"virat", salary:40000}]

//find method
console.log("Find method");
let found= emp.find((val)=>{
  return val.salary>20000;
});
console.log(found); // Output: {name:"rohit", salary:30000}