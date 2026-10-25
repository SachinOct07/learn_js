
console.log("Object methods");

let emp= {
  name:"sachin",
  salary:10000,
  age:30,
  city:"pune"
};

console.log(emp);

let obj = new Object();
//Object.create() method is used to create a new object with the specified prototype object and properties.
let emp1= Object.create(emp);
console.log(emp1.name);

//Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
let emp2= Object.assign(emp,{role:"developer"});
console.log(emp);
console.log(emp2);

//Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs.
let emp3= Object.entries(emp);
console.log(emp3);

//Object.fromEntries() method is used to return a new object from an array of key-value pairs.
let emp4= Object.fromEntries(emp3);
console.log(emp4);

//Object.keys() method is used to return an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
let emp5= Object.keys(emp);
console.log(emp5);

//Object.values() method is used to return an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
let emp6= Object.values(emp);
console.log(emp6);

//Object.freeze() method is used to freeze an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In essence the object is made effectively immutable. The method returns the same object that was passed in.
let spl = {
  name:"sachin"
}
Object.freeze(spl);
spl.age=34;
console.log(spl); // Output: {name:"sachin"}

//Object.isFrozen() method is used to determine if an object is frozen. It returns a boolean indicating whether the object is frozen.
console.log(Object.isFrozen(spl)); // Output: true
console.log(Object.isFrozen(emp)); // Output: false