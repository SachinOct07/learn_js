
//Promise has three states: pending, fulfilled, and rejected.
// It is used to handle asynchronous operations in JavaScript. A promise can be created using the `Promise` constructor, which takes a function with two parameters: `resolve` and `reject`.
// The `resolve` function is called when the asynchronous operation is successful, and the `reject` function is called when the operation fails. 
// The `then()` method is used to handle the resolved value, and the `catch()` method is used to handle any errors that occur during the operation. 
// The `finally()` method is used to execute code after the promise is settled, regardless of whether it was fulfilled or rejected.
//Promise is used to avoid callback hell and make the code more readable and maintainable. 
// It allows chaining of multiple asynchronous operations and provides a cleaner way to handle errors.

let prom = new Promise((resolve, reject)=>{
  let data = true;
  if(data){
    resolve("Data is available");
  }
  else{
    reject("Data is not available");
  }
})

prom.then((message)=>{
  console.log(message);
}).catch((error)=>{
  console.error(error);
}).finally(()=>{
  console.log("Promise is settled");
})