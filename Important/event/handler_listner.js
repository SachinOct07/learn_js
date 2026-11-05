
//Event Listener
// In event listener we can add multiple event listener on same element and all will be executed in order of their addition.
let btn1= document.getElementById("list");
console.log(btn1);

btn1.addEventListener("click",function(){
  console.log("First Listner");
})

btn1.addEventListener("click",function(){
  console.log("Second Listner");
})


//Event Handler
// In event handler, if we add multiple event handlers on the same element, only the last one will be executed.
let btn2= document.getElementById("hand");
console.log(btn2);

btn2.onclick= function(){
  console.log("First Handler");
}

btn2.onclick= function(){
  console.log("Second Handler");
}
