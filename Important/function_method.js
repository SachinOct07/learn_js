
console.log("Function methods");

//Function methods are used to manipulate the function and its properties.
let emp={
  name:"sachin",
  salary:10000,
  introduce:function(a,b){
    console.log(a+b);
    console.log(this.name);
  }
}

emp.introduce(10,20); // Output: 30


let emp1={
  name:"sachin",
  salary:10000,
  introduce:(a,b)=>{
    console.log(a+b);
    console.log(this.name);// This will be undefined in an arrow function
  }
}

emp1.introduce(10,20); 


let per={
  fname: "Virat",
  lname: "Kohli"
}
let per1={
  id: "u1",
   fname: "sachin",
  lname: "tendulkar",
  intro: function(a,b){
    console.log(this.fname + " " + this.lname+(a+b));
    // return a+b;
  }
}
//call() method is used to call a function with a given this value and arguments provided individually.
per1.intro.call(per,1,2);
per1.intro(1,2);

//apply() method is used to call a function with a given this value, and arguments provided as an array (or an array-like object).
per1.intro.apply(per,[1,2]);

let ask= per1.intro.bind(per,1,2); //bind() method is used to create a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
ask();