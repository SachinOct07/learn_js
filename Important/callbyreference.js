
let obj={
  name:"sachin",
  age:30,
};

let obj1=obj; //copy of obj is stored in obj1

obj1.name="sachin tendulkar"; //obj1 is updated but obj is also updated because obj1 has a reference to obj's value
console.log(obj,obj1);

let arr=[1,2,3,4,5];
let arr1=arr; //copy of arr is stored in arr1

arr1[0]=10; //arr1 is updated but arr is also updated because arr1 has a reference to arr's value
console.log(arr,arr1);