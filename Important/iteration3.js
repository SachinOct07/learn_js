
// for in loop is used to iterate over the properties of an object
let per1 = {
  name: "John",
  age: [30,40,50],
  family:{
    father: "Mike",
    siblings: ["Anna", "Tom"]
  },
  walk(){
    console.log("John is walking");
  }
}

for(let key in per1){
  console.log(per1[key]);
}

// for in loop is used to iterate over the indexes of an array
let arr = [10, 20, 30, 40];
for(let index in arr){
  console.log(arr[index]);
}

// for in loop is used to iterate over the properties of a string
let str = "Hello";
for(let index in str){
  console.log(str[index]);
}