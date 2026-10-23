
let user = {
  name: "John",
  age: 30,
  haircolor: "brown",
  eyecolor: "blue",
  eat: function() {
    console.log("John is eating");
  }
}

console.log(user.name);//accessing the property using dot notation
console.log(user.age);
console.log(user.haircolor);
console.log(user.eyecolor);
user.eat();

let vehicle = {
  type: "car",
  brand: ["Toyota","Honda", "Ford"],
  model: "Camry",
}

console.log(vehicle["type"]);//accessing the property using bracket notation
console.log(vehicle["brand"][0]);//output: Toyota

//shorthand assigned property
let name = "Alice";
let age = 25;

let person = {
  name,
  age,
}
console.log(person.name, person.age); //output: Alice 25

//dynamic property access refer UNIQ technologies time(5:50)
let propertyName = "haircolor";
console.log(user[propertyName]); //output: brown
console.log(user);