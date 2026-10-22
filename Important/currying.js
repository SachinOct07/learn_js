//Uncurrying function
function add(a, b, c){
  console.log(a+b+c);
}

add(1,2,3);

//Currying function
function adds(a){
  return function(b){
    return function(c){
      console.log(a+b+c);
    }
  }
}

adds(10)(20)(30);//this function call is called chaining function call.

//Another example of currying function
function multiply(a){
  return function(b){
    return function(c){
      console.log(a*b*c);
    }
  }
}

let x= multiply(2);
let y= x(3);
let z= y(4);//this function call is called chaining function call.
console.log(z);