//array iteration using for...of loop
let arr= [10,100,1000,10000];

for(let val of arr){
  console.log(val);
}

//string iteration using for...of loop
let str = "Hello";
for(let char of str){
  console.log(char);
}

//generator function iteration using for...of loop
function* sample(){
  yield 1;
  yield 2;
  yield 3;
}

let it = sample();

for(let val of it) {
  console.log(val);
}

//Note: we can't use for...of loop with objects because they are not iterable.