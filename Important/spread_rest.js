
let hobbies = ["Reading", "Traveling", "Cooking"];
let hobbies1=["Swimming", "Painting"];

let newArr = [...hobbies, ...hobbies1];
hobbies[0] = "Writing"; // Modifying the original array

let newArr1 = [...hobbies,"hello"];
console.log(newArr); // Output: ["Reading", "Traveling", "Cooking", "Swimming", "Painting"]
console.log(newArr1);


let employee = {
  name: "Alice",
  age: 30,
  position: "Developer"
};

let team1 = {
  ...employee,
  age: 35, // Overriding the age property
  department: "IT"
};

console.log(team1); // Output: { name: "Alice", age: 30, position: "Developer", department: "IT" }


//Rest operator

function sum(a,b,...numbers) {
  console.log(a,b,numbers); // Output: [1, 2, 3, 4, 5]
}

sum(1, 2, 3, 4, 5);