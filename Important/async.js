
function f1(){
  console.log("f1");
}
function f2(){
  console.log("f2");
}
function f3(){
  console.log("f3");
}

f1();
//setTimeout() is a method from web API that is used to execute a function after a specified number of milliseconds. It takes two arguments: the function to be executed and the time in milliseconds to wait before executing the function.
setTimeout(f2,2000);
f3();

//callstack -> Web API -> callback queue -> event loop

// callback queue has two types of queue
// 1. macro task queue -> second priority is given to macro task queue after micro task queue is empty
//macro task queue has two types of queue
// 1. setTimeout queue -> first priority is given to setTimeout queue after macro task queue is empty
// 2. setInterval queue -> second priority is given to setInterval queue after setTimeout queue is empty
// 2. micro task queue -> event loop gives first priority to micro task queue
// micro task queue has two types of queue
// 1. promise queue -> first priority is given to promise queue after micro task queue is empty
// 2. mutation observer queue -> second priority is given to mutation observer queue after promise queue is empty
