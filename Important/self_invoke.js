function normal(){
  console.log("Executed whenever normal function is called");
}
normal();
normal();

//IIFE (Immediately Invoked Function Expression) or Self Invoking Function.
(function (){
  console.log("self invoked function");
})();