
//deep copy

let a=10;
let b=a; //copy of a is stored in b

a=20;
console.log(a,b); //b remains 10 because b has a copy of a's value

let obj1={
  name:"sachin",
  age:30,
};

let obj2={...obj1}; //spread operator creates a new object with the same properties as obj1

obj2.name="sachin tendulkar"; //obj2 is updated but obj1 is not updated because obj2 is a new object
console.log(obj1,obj2);

//shallow copy

let person1={
  name:"sachin",
  age:30,
  hobbies:{
    hobby1:"cricket",
    hobby2:"football"
  }
};

let person2={...person1}; //spread operator creates a new object with the same properties as person1
person2.age=35; //person2 is updated but person1 is not updated because person2 is a new object
person2.hobbies.hobby1="hockey";
console.log(person1,person2); //person1 is updated because person2 has a reference to person1's hobbies object