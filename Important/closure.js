function outer(){
  let ov = "Outer variable";
  function inner(){
    console.log(ov);
  }
  return inner;
}

let innerFunc = outer();
let innerFunc2 = innerFunc();
console.log(innerFunc2); //undefined
// Closure is used to access the outer function variable even after the outer function executed.
// If you need to know clearly refer UNIQ technologies timing=>(5:10:00)